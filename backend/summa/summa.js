// exports.borrowBook = (req, res, next) => {
//   return new Promise((res, rej) => {
//     Borrow.create(req.body).then((borrow) => {
//       if (borrow) {
//         console.log('this is frontend', borrow.isbn);
//         Book.findOne({ isbn: borrow.isbn }).then((data) => {
//           if (data) {
//             console.log("number:  ", data.isbn);
//             res.status(200).json({
//               success: true,
//               message: "successfully Borrowed",
//               borrow
//             })
//             res()
//           } else {
//             console.log("inside error");
//             rej('Enter the Valid ISBN Number')
//           }
//         })
//       } else {
//         rej()
//       }
//     })
//   })

//   exports.borrowBook = (req, res, next) => {
//     return new Promise((resolve, reject) => {
//       Borrow.create(req.body).then((borrow) => {
//         if (borrow) {
//           console.log('This is Frontend_bookid:', borrow.bookid)
//           Book.findOne({ borrow: borrow.bookid }).then((data) => {
//             console.log('borrow', borrow);
//             console.log('this is borrow.bookid', borrow.bookid);
//             if (data) {
//               console.log("DB_bookid: ", data.bookid);
//               res.status(200).json({
//                 sucess: true,
//                 message: "successfully Borrowed",
//                 borrow
//               })
//               resolve()
//             }
//           }else {
//             console.log("inside error");
//             rej('Enter the Valid bookid Number')
//           }
//             })
//         .catch((err) => {
//           reject('enter the valid bookid number')
//           console.log(err);
//         })
//     }
//         })
// })

// }

// exports.borrowBook = (req, response) => {
//   return new Promise((res, rej) => {


//     Borrow.create(req.body)
//       .then((borrow) => {
//         const data_bookid = borrow.bookid
//         console.log('is this the data from frontend', data_bookid);
//         if (data_bookid) {
//           console.log("before_passing: ", data_bookid);
//           Book.find({ data_bookid: data.bookid }).then((data) => {
//             console.log('data passed in response', data.bookid)
//             response.status(200).json({
//               success: true,
//               message: 'User has borrowed the book..!',
//               borrow
//             })
//             res()
//           })
//             .catch((err) => {
//               // rej({
//               //   success : false,
//               //   message : 'enter the correct bookid'

//               // })
//               console.log(err);
//             })
//         }
//       })
//       .catch((e) => (console.log(e)))
//   })
// }
