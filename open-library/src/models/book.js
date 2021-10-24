const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
    id: String,
    title: String,
    description: String,
    author: String,
    category :String,
    publish: String,
    imgUrl: String,
    fileUrl: String,
    rating: String,
    isbn: String,
    likes: String,
    idUser: String
});

module.exports = mongoose.model("Book", Book);