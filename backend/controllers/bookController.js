const Book = require('../models/bookModel')
const ErrorHandler = require("../utils/errorHandler")
const catchError = require("../middlewares/catchAsyncError") 
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