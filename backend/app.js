const express = require("express");
const expressFile = require("express-fileupload")
const cors = require('cors')
const { createClient } = require("redis")
const { cre } = require("../frontend/node_modules")

const app = express()

const errorMiddleware = require("./middlewares/error")

const books = require("./routes/routes")
const students = require("./routes/routes")
const facultys = require("./routes/routes")
const auth = require("./routes/routes")

app.use(expressFile())
app.use(cors())
app.use(express.json());
app.use("/", books, students, facultys, auth)



exports.redis = createClient()

app.use(errorMiddleware)





module.exports = app;