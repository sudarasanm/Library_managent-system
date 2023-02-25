const Book = require('../models/bookModel')
const Faculty = require('../models/facultyModel')
const Student = require('../models/studentModel')
const Borrow = require('../models/borrowModel')
const Return = require('../models/returnModel')
const Report = require('../models/reportModule')
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

// exports.borrowBook = (req, res, next)=>{
//      return new Promise((resolve,reject)=>{
//         Borrow.create(req.body).then((borrow)=>{
//           if(borrow){
//             console.log('This is Frontend_bookid:',borrow.bookid)
//             Book.findOne({borrow : borrow.bookid}).then((data)=>{
//               console.log('borrow',borrow);
//               console.log('this is borrow.bookid',borrow.bookid);
//               if(data){
//                 console.log("DB_bookid: ",data.bookid);
//                 res.status(200).json({
//                   sucess:true,
//                   message:"successfully Borrowed",
//                   borrow
//                 })
//                 resolve()
//               }
              // }else{
              //   console.log("inside error");
              //   rej('Enter the Valid bookid Number')
              // }
//             })
//             .catch((err) => {
//               reject('enter the valid bookid number')
//               console.log(err);
//             })
//           }
//         })
//      })

// }

// exports.borrowBook = (req,response) => {
//   return new Promise((res, rej) => {
    
   
//     Borrow.create(req.body)
//     .then((borrow) => {
//       const data_bookid =  borrow.bookid
//       console.log('is this the data from frontend',data_bookid);
//       if(data_bookid){
//         console.log("before_passing: ",data_bookid);
//         Book.find({data_bookid : data.bookid}).then((data) => {
//             console.log('data passed in response',data.bookid)
//           response.status(200).json({
//             success : true,
//             message : 'User has borrowed the book..!',
//             borrow
//           })
//           res()
//         })
//         .catch((err) => {
//           // rej({
//           //   success : false,
//           //   message : 'enter the correct bookid'
        
//           // })
//           console.log(err);
//         })
//       }
//     })
//     .catch((e) => (console.log(e)))
//   })
// }

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
  const borrow = await Borrow.create(req.body)
  const reportBook = await Report.create(req.body)
  res.status(201).json({
    success:true,
    borrow,
    reportBook
  })
})  


exports.returnBook = catchError(async (req,res,next)=>{
  const {register , name, bookid ,role}= (req.body)

  if(!register || !name || !bookid || !role){
    return next(new ErrorHandler ('Enter the requide fields'))
  }

  const lbookid =  await Borrow.findOne({bookid:bookid})
  // console.log(lbookid);
  if(!lbookid){
    return next(new ErrorHandler("The Book is not Borrow or Invalid bookid"))
  }
  const returnBook = await Return.create(req.body) 
  const reportBook = await Report.create(req.body)
  res.status(201).json({
    success:true,
    returnBook,
    reportBook
  })

})  

exports.getreport = catchError(async(req,res,next)=>{ 
  const report = await Report.find();
  res.status(200).json({
    success:true,
    Transaction: report.length,
    report
  })
}) 