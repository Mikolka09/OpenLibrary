const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
    title: String,
    description: String,
    author: String,
    category :String,
    publish: String,
    image: String,
    rating: String,
    isbn: String,
    likes: String
});

module.exports = mongoose.model("Book", Book);