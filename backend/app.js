const express = require("express");
const app = express()
const errorMiddleware = require("./middlewares/error")

const books = require("./routes/routes")
const students = require("./routes/routes")
const facultys = require("./routes/routes")
const auth = require("./routes/routes")
app.use(express.json());
app.use("/",books,students,facultys,auth)






app.use(errorMiddleware)





module.exports = app;