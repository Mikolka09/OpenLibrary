const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const middleAuth = require("./middlewaer/authMiddlewaer");
const middleRole = require("./middlewaer/roleMiddlewaer");

const cBook = require("./controllers/bookController");
router.get("/api/book", cBook.get);
router.post("/api/book", cBook.post);
router.put("/api/book", cBook.put);
router.delete("/api/book", cBook.delete);

const cAuth = require("./controllers/authController");
router.post("/auth/registration", [
    check("username", "Username cannot be empty!").notEmpty(),
    check("password", "Password must be more than 4 and less than 10 characters!")
        .isLength({min:4, max:10}),
    check("email", "Incorrect email!").isEmail(),
], cAuth.registration);
router.post("/auth/login", cAuth.login);
router.get("/auth/users", middleRole(["ADMIN"]), cAuth.getUsers);

module.exports = router;
