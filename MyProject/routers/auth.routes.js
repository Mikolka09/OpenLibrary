const Router = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");
const config = require("config");
const Role = require("../models/role");
const router = new Router();

router.post("/register",
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', "Password must be longer 3 and shorter than 12").isLength({min: 3, max: 12}),
        check('username', "The UserName must not be empty").exists().not().isEmpty()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(), message: `Uncorrect request!`});
            }
            const {username, email, password} = req.body;
            const candidate = await User.findOne({email});
            if (candidate) {
                return res.status(400).json({message: `User with email ${email} already exist!`});
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value:"USER"});
            const user = new User({username, email, password: hashPassword, roles: [userRole.value]});
            await user.save();
            return res.json({message: "User was created!"});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: "Server error"});
        }
    })

router.post("/login",
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', "Password must be longer 3 and shorter than 12").isLength({min: 3, max: 12})
    ],async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(), message: `Uncorrect request!`});
            }
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if(!user){
                return res.status(404).json({message:"User not found!"});
            }
            const isPassValid = bcrypt.compareSync(password, user.password);
            if(!isPassValid){
                return res.status(400).json({message:"Invalid password!"});
            }
            const token = jwt.sign({userId:user._id}, config.get("secretKey"), {expiresIn: "1h"});
            return res.json({
                token,user:{userId: user._id, roles: user.roles}
            })
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: "Server error"});
        }
    })


module.exports = router;
