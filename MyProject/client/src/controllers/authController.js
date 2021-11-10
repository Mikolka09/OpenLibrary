const User = require("../models/user");
const Role = require("../models/role");
const bcrypt = require('bcryptjs');
const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const {secret} = require("../config");

const generateAccessToken = (id, roles)=>{
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "1h"});
}

class authController{
    async registration(req, res){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Registration error", errors});
            }
            const {username, email, password} = req.body;
            const candidate = await User.findOne({username, email});
            if(candidate){
                return res.status(400).json({message:"A user with the same name already exists!"});
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value:"USER"});
            const user = new User({username, email, password: hashPassword, roles: [userRole.value]});
            await user.save();
            return res.json({message:"User registered successfully!"});
        }
        catch (e) {
            console.log(e);
            res.status(400).json({message:"Registration Error!"});
        }
    }

    async login(req, res){
        try{
            const {username, password} = req.body;
            const user = await User.findOne({username});
            if(!user){
                res.status(400).json({message:`User ${username} is not found`});
            }
            const validPassword = bcrypt.compareSync(password,user.password);
            if(!validPassword){
                res.status(400).json({message:"The password is incorrect"});
            }
            const token = generateAccessToken(user._id, user.roles);
            return res.json({token});
        }
        catch (e) {
            console.log(e);
            res.status(400).json({message:"Login Error!"});
        }
    }

    async getUsers(req, res){
        try{
            /*const userRole = new Role();
            const adminRole = new Role({value:"ADMIN"});
            await userRole.save();
            await adminRole.save();*/
            //res.json("server work");

            const users = await User.find();
            res.json(users);
        }
        catch (e) {

        }
    }
}

module.exports = new authController();