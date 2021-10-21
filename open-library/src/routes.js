const express = require("express");
const router = express.Router();

const cBook = require("./controllers/bookController");
router.get("/api/book", cBook.get);
router.post("/api/book", cBook.post);
router.put("/api/book", cBook.put);
router.delete("/api/book", cBook.delete);