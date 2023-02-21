const Faculty = require('../models/facultyModel')

//Get faculty -
exports.getFacultys = async (req , res , next)=>{
  const facultys = await Faculty.find();
    res.status(200).json({
        success: true,
        facultys
    })
}
//Create Faculty - /faculty/new
exports.newFaculty = async (req ,res,next)=>{
      const faculty =  await Faculty.create(req.body)
      res.status(201).json({
        success:true,
        faculty
      })
}