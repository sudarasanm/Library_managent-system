const express = require("express");
const { getFacultys, newFaculty, updateFaculty, deleteFaculty } = require("../controllers/facultyController");
const { getBooks, newBook, updateBook, deleteBook, borrowBook, returnBook,  getreport, getMaintainborrowbook } = require("../controllers/bookController");
const { getStudents, newStudent, updateStudent, deleteStudent } = require("../controllers/studentController");
const { registerUser, loginUser } = require("../controllers/authController")
const router = express.Router();

router.route("/borrows").post(borrowBook);
router.route("/maintainborrows").get(getMaintainborrowbook)
router.route("/returns").post(returnBook);
router.route("/reports").get(getreport)

router.route("/facultys").get(getFacultys);
router.route("/students").get(getStudents);
router.route("/books").get(getBooks);

router.route("/faculty/new").post(newFaculty);
router.route("/book/new").post(newBook);
router.route("/student/new").post(newStudent);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/book/:id").put(updateBook);
router.route("/students/:id").put(updateStudent);
router.route("/faculty/:id").put(updateFaculty);

router.route("/book/:id").delete(deleteBook);
router.route("/students/:id").delete(deleteStudent);
router.route("/faculty/:id").delete(deleteFaculty);


module.exports = router