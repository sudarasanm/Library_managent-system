const Student = require('../models/studentModel')
const ErrorHandler = require("../utils/errorHandler")
const catchError = require("../middlewares/catchAsyncError") 
//get Student
exports.getStudents = async (req , res , next)=>{
  const students = await Student.find();
    res.status(200).json({
        success: true,
        students
    })
}
//Create Student - /student/new
exports.newStudent = catchError( async (req ,res,next)=>{
      const student =  await Student.create(req.body)
      res.status(201).json({
        success:true,
        student
      })
})

exports.updateStudent = async (req ,res,next) =>{
  let student = await Student.findById(req.params.id);
   if(!student){
    return next(new ErrorHandler('Student is not found',404));
   }
   student = await Student.findByIdAndUpdate(req.params.id, req.body,{
      new: true,
      runvalidators: true
   })

   res.status(200).json({
    sucess:true,
    student
   })
}

exports.deleteStudent = async (req, res, next) =>{
  let student = await Student.findById(req.params.id);
   if(!student){
    return next(new ErrorHandler('Student is not found',404));
          
   }
   await Student.remove();
   
   res.status(200).json({
    success:true,
    message: "Student Deleted"
   })
}