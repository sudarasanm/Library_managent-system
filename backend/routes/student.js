const express = require("express");
const { getStudents, newStudent } = require("../controllers/studentController");
const router = express.Router();

router.route("/students").get(getStudents);
router.route("/student/new").post(newStudent);




module.exports =router