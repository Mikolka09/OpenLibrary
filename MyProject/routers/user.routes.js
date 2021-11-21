const Router = require("express");
const User = require("../models/user");
const middleRole = require("../middlewaer/roleMiddlewaer");
const router = new Router();

router.get("/dashboard/userDetails",
    async(req, res) =>{
        try{
            const users = await User.find();
            console.log(users);
            return res.json(users);
        }
        catch (e) {
            console.log(e);
            res.status(500).json({ message: 'Server error' });
        }
    })


module.exports = router;
