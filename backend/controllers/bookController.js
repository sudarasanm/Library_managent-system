const Book = require('../models/bookModel')
// const Faculty = require('../models/facultyModel')
// const Student = require('../models/studentModel')
const Borrow = require('../models/borrowModel')
const BorrowMaintain = require('../models/borrowMaintainModel')
const Return = require('../models/returnModel')
// const Report = require('../models/reportModule')
const ErrorHandler = require("../utils/errorHandler")
const catchError = require("../middlewares/catchAsyncError") 
const { db } = require('../models/bookModel')





//Get Book - 
exports.getBooks = async (req , res , next)=>{
    const books = await Book.find();
    res.status(200).json({
        success: true,
        count : books.length,
        books
    })
}


//Create Book - /book/new
exports.newBook = catchError(async (req ,res,next)=>{
      const book =  await Book.create(req.body)
      res.status(201).json({
        success:true,
        book
      })
})



exports.updateBook = async (req ,res,next) =>{
    let book = await Book.findById(req.params.id);
     if(!book){
         return next(new ErrorHandler('Book is not found',404));
          
     }
     book = await Book.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runvalidators: true
     })

     res.status(200).json({
      sucess:true,
      book
     })
}

exports.deleteBook = async (req, res, next) =>{
  let book = await Book.findById(req.params.id);
   if(!book){
    return next(new ErrorHandler('Book is not found',404));
          
   }
   await Book.remove();
   
   res.status(200).json({
    success:true,
    message: "Book Deleted"
   })
}


exports.borrowBook = catchError(async (req,res,next)=>{
  const {register , name, bookid ,role}= (req.body)

  if(!register || !name || !bookid || !role){
    return next(new ErrorHandler ('Enter the requide fields'))
  }

  const lbookid =  await Book.findOne({bookid:bookid})
  // console.log(lbookid);
  if(!lbookid){
    return next(new ErrorHandler("Invalid bookid"))
  }
  if(lbookid){
    const filter = { bookid:bookid };
    const update = { $inc: { stocks: -1 } };
    Book.updateOne(filter, update, (err, result) => {
    if (err) throw err;
  });
  }
  const borrow = await Borrow.create(req.body)
  const borrow_maintain = await BorrowMaintain.create(req.body)
  res.status(201).json({
    success:true,
    borrow,
    borrow_maintain
  })
})  


exports.returnBook = catchError(async (req,res,next)=>{
  const {register , name, bookid ,role}= (req.body)

  if(!register || !name || !bookid || !role){
    return next(new ErrorHandler ('Enter the requide fields'))
  }

  const rbookid =  await Borrow.findOne({bookid:bookid})
  
  if(!rbookid){
    return next(new ErrorHandler("The Book is not Borrow or Invalid bookid"))
  }
  const returnBook = await Return.create(req.body) 
  
  if(rbookid){
    const deletedBooks = await BorrowMaintain.deleteOne({rbookid})
  }
  if(rbookid){
      const filter = { bookid:bookid };
      const update = { $inc: { stocks: 1 } };
      Book.updateOne(filter, update, (err, result) => {
      if (err) throw err;
    });
    }

  res.status(201).json({
    success:true,
    returnBook
    
  })

})  

exports.getreport = catchError(async(req,res,next)=>{ 
  const breport = await Borrow.find();
  const rreport = await Return.find();
  
  res.status(200).json({
    success:true,
    Borrow_Transaction: breport.length,
    Return_Transaction: rreport.length, 
    breport,
    rreport
  })
}) 

exports.getMaintainborrowbook = catchError(async(req,res,next)=>{
    const maintain = await BorrowMaintain.find();

    res.status(200).json({
      success:true,
      maintain
    })
})