const express = require("express");
const app = express()


const books = require("./routes/book")
const students = require("./routes/student")
const facultys = require("./routes/faculty")
app.use(express.json());
app.use("/",books,students,facultys)













module.exports = app;