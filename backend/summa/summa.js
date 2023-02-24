exports.borrowBook = (req, res, next)=>{
  return new Promise((res,rej)=>{
      Borrow.create(req.body).then((borrow)=>{
        if(borrow){
          console.log('this is frontend',borrow.isbn);
          Book.findOne({isbn:borrow.isbn}).then((data)=>{
            if(data){
              console.log("number:  ",data.isbn);
              res.status(200).json({
                success:true,
                message:"successfully Borrowed",
                borrow
              })
              res()
            }else{
              console.log("inside error");
              rej('Enter the Valid ISBN Number')
            }
          })
        }else{
          rej()
        }
      })
  })