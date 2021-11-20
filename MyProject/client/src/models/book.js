const mongoose = require("mongoose");
const {Types} = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
    title: {type:String, unique:true, required:true},
    description: {type:String, required:true},
    author: {type:String, required:true},
    category :{type:String, required:true},
    publish: {type:Date, default:Date.now},
    imgUrl: {type:String, required:true, unique:true},
    fileUrl: {type:String, required:true, unique:true},
    rating: {type:Number, default:0},
    isbn: {type:String, required:true, unique:true},
    likes: {type:Number, default:0},
    idUser: {type:Types.ObjectId, ref:"User"}
});

module.exports = mongoose.model("Book", Book);