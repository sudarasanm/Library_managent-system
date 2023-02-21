const Book = require('../models/bookModel')


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
exports.newBook = async (req ,res,next)=>{
      const book =  await Book.create(req.body)
      res.status(201).json({
        success:true,
        book
      })
}

exports.updateBook = async (req ,res,next) =>{
    let book = await Book.findById(req.params.id);
     if(!book){
      return res.status(404).json({
        success: false,
        message: "Book not found" 
      })
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