const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
    title: String,
    description: String,
    author: String,
    category :String,
    publishing: String,
    image: String,
    rating: String,
    isbn: String
});

module.exports = mongoose.model("Book", Book);