const Faculty = require('../models/facultyModel')
const ErrorHandler = require("../utils/errorHandler")
const catchError = require("../middlewares/catchAsyncError")
const {excelToJson,Jsontoexport} = require("../../backend/utils/excel-parser")

//Get faculty -
exports.getFacultys = async (req, res, next) => {
  const facultys = await Faculty.find({}, { name: 1, _id: 0, register: 1, gender: 1, department: 1, phoneno: 1 });
  res.status(200).json({
    success: true,
    count: facultys.length,
    facultys
  })
}
//Create Faculty - /faculty/new
exports.newFaculty = catchError(async (req, res, next) => {
  const faculty = await Faculty.create(req.body)
  res.status(201).json({
    success: true,
    faculty
  })
})

exports.updateFaculty = async (req, res, next) => {
  let faculty = await Faculty.findById(req.params.id);
  if (!faculty) {
    return next(new ErrorHandler('Faculty is not found', 404));

  }
  faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runvalidators: true
  })

  res.status(200).json({
    sucess: true,
    faculty
  })
}

exports.deleteFaculty = async (req, res, next) => {
  let faculty = await Faculty.findById(req.params.id);
  if (!faculty) {
    return next(new ErrorHandler('Faculty is not found', 404));

  }
  await Faculty.remove();

  res.status(200).json({
    success: true,
    message: "Faculty Deleted"
  })
}
exports.uploadDetailsfaculty = catchError(async (req, res)=>{

    let file = req.files.data

    let loadfile = await excelToJson(file)

    let result = await Faculty.create(loadfile)
  
    res.status(200).json(result);

  }
)