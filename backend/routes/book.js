const express = require("express");
const { getBooks, newBook, updateBook } = require("../controllers/bookController");
const router = express.Router();

router.route("/books").get(getBooks);
router.route("/book/new").post(newBook);
router.route("/book/:id").put(updateBook)





module.exports =router