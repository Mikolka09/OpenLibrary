const Router = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");
const config = require("config");
const router = new Router();

router.post("/registration",
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', "Password must be longer 3 and shorter than 12").isLength({min: 3, max: 12}),
        check('username', "The UserName must not be empty").isEmpty()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: `Uncorrect request!`, errors});
            }
            const {username, email, password} = req.body;
            const candidate = await User.findOne({email});
            if (candidate) {
                return res.status(400).json({message: `User with email ${email} already exist!`});
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({username, email, password: hashPassword});
            await user.save();
            return res.json({message: "User was created!"});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: "Server error"});
        }
    })
router.post("/login",async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if(!user){
                return res.status(404).json({message:"User not found!"});
            }
            const isPassValid = bcrypt.compareSync(password, user.password);
            if(!isPassValid){
                return res.status(400).json({message:"Invalid password!"});
            }
            const token = jwt.sign({id:user._id}, config.get("secretKey"), {expiresIn: "1h"});
            return res.json({
                token,
                user:{
                    id: user._id,
                    email: user.email,
                    username: user.username,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: "Server error"});
        }
    })


module.exports = router;
