const Student = require('../models/studentModel')

//get Student
exports.getStudents = async (req , res , next)=>{
  const students = await Student.find();
    res.status(200).json({
        success: true,
        students
    })
}
//Create Student - /student/new
exports.newStudent = async (req ,res,next)=>{
      const student =  await Student.create(req.body)
      res.status(201).json({
        success:true,
        student
      })
}