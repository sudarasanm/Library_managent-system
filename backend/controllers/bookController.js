const Book = require('../models/bookModel')
const Borrow = require('../models/borrowModel')
const BorrowMaintain = require('../models/borrowMaintainModel')
const Return = require('../models/returnModel')
const ErrorHandler = require("../utils/errorHandler")
const {excelToJson,Jsontoexport} = require("../../backend/utils/excel-parser")
const catchError = require("../middlewares/catchAsyncError")
const multer = require('multer');
const XLSX = require('xlsx');
const catchAsyncError = require('../middlewares/catchAsyncError')




// $or:[{name : {$regex : req.query.searchKey}},{author : {$regex : req.body.searchKey}},{department : {$regex : req.body.searchKey}},{bookid : {$regex : req.body.searchKey}}]
//Get Book - 
exports.getBooks = async (req, res, next) => {
   {
    const books = await Book.find({}, { name: 1, _id: 0, isbn: 1, author: 1, department: 1, cost: 1, stocks: 1, bookid: 1 });
    res.status(200).json({
      success: true,
      count: books.length,
      books
    })
  }
}


//Create Book - /book/new
exports.newBook = catchError(async (req, res, next) => {
  const book = await Book.create(req.body)
  res.status(201).json({
    success: true,
    book
  })
})



exports.updateBook = async (req, res, next) => {
  let book = await Book.findById(req.params.id);
  if (!book) {
    return next(new ErrorHandler('Book is not found', 404));

  }
  book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runvalidators: true
  })

  res.status(200).json({
    sucess: true,
    book
  })
}

exports.deleteBook = async (req, res, next) => {
  let book = await Book.findById(req.params.id);
  if (!book) {
    return next(new ErrorHandler('Book is not found', 404));

  }
  await Book.remove();

  res.status(200).json({
    success: true,
    message: "Book Deleted"
  })
}


exports.borrowBook = catchError(async (req, res, next) => {
  const { register, name, bookid, role } = (req.body)

    if (!register || !name || !bookid || !role) {
      return next(new ErrorHandler('Enter the Required fields'))
    }

  const lbookid = await Book.findOne({ bookid: bookid })

  if (!lbookid) {
    return next(new ErrorHandler("Invalid bookid"))
  }
  if (lbookid) {
    const filter = { bookid: bookid };
    const update = { $inc: { stocks: -1 } };
    Book.updateOne(filter, update, (err, result) => {
      if (err) throw err;
    });
  }
  const borrow = await Borrow.create(req.body)
  const borrow_maintain = await BorrowMaintain.create(req.body)
  res.status(201).json({
    success: true,
    borrow,
    borrow_maintain,
    count: borrow_maintain.length,


  })
})
// const upload = multer().single('data');
 exports.uploadDetailsbook = catchError(async (req, res)=>{

    let file = req.files.data

    let loadfile = await excelToJson(file)

    let result = await Book.create(loadfile)

    res.status(200).json(result);

}
)

exports.returnBook = catchError(async (req, res, next) => {
  const { register, name, bookid, role } = (req.body)

  if (!register || !name || !bookid || !role) {
    return next(new ErrorHandler('Enter the requide fields',401))
  }

  const rbookid = await BorrowMaintain.findOne({ bookid: bookid })

  if (!rbookid) {
    return next(new ErrorHandler('The Book is not Borrow or Invalid bookid',401))
  }
  const returnBook = await Return.create(req.body)

  if (rbookid) {
    const deletedBooks = await BorrowMaintain.deleteOne({ rbookid })
  }
  if (rbookid) {
    const filter = { bookid: bookid };
    const update = { $inc: { stocks: 1 } };
    Book.updateOne(filter, update, (err, result) => {
      if (err) throw err;
    });
  }

  res.status(201).json({
    success: true,
    returnBook

  })

})

exports.getreport = catchError(async (req, res, next) => {
  const breport = await Borrow.find({}, { name: 1, _id: 0, register: 1, bookid: 1, role: 1, Date: 1, active: 1 });
  const rreport = await Return.find({}, { name: 1, _id: 0, register: 1, bookid: 1, role: 1, Date: 1, active: 1 });


  const final = [...breport, ...rreport]
  

  res.status(200).json({
    success: true,
    final,
    count: final.length

  })
})


exports.getMaintainborrowbook = catchError(async (req, res, next) => {
  const maintain = await BorrowMaintain.find({}, { name: 1, _id: 0, register: 1, bookid: 1, role: 1, purchaseDate: 1, active: 1 });

  res.status(200).json({
    success: true,
    maintain,
    count: maintain.length,


  })
})