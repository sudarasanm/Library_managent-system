const express = require("express");
const { getFacultys, newFaculty } = require("../controllers/facultyController");
const router = express.Router();

router.route("/facultys").get(getFacultys);
router.route("/faculty/new").post(newFaculty);




module.exports =router