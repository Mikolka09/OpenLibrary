const {Schema, model, ObjectId} = require("mongoose");

const User = new Schema({
    username: {type:String, unique:true, required:true},
    avatar:{type:String},
    email: {type:String, unique:true, required:true},
    password: {type:String, required:true},
    books:[{type:ObjectId, ref:"Book"}],
    roles: [{type:String, ref:'Role'}]
});

module.exports = model("User", User);