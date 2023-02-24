const catchAsyncError = require('../middlewares/catchAsyncError')
const sendToken = require("../utils/jwt")
const User = require("../models/userModel")
const ErrorHandler = require('../utils/errorHandler')

exports.registerUser = catchAsyncError (async (req,res,next)=>{
    const {username, password} = req.body
   const user = await User.create({
        username,
        password
    })
    sendToken(user,201,res)
})

exports.loginUser = catchAsyncError(async (req,res,next)=>{
    const {username , password} =req.body
    

    if(!username || !password){
        return next(new ErrorHandler('Enter the username &  password',400))
    }

    //finding the user database
    const user = await User.findOne({username}).select('+password');


    if(!user){
        return next(new ErrorHandler('Invalid username or Password',401))
    }

    if(!user.isValidPassword(password)){
        return next(new ErrorHandler('Invalid username or  Password',401))
    }
    sendToken(user,201,res)

})

// exports.forgotPassword = catchAsyncError(async(req,res,next)=>{
//    const user =  User.findOne({username: req.body.username})

//    if (!user){
//     return next(new ErrorHandler('user not found with this email', 401))
//    }

//    const resetToken =  user.getResetToken();
//    user.save({validateBeforeSave: false})

//    //create reset url
//    const resetUrl = `${req.protocol}://${req.get('host')}/password/reset/${resetToken}`

//    const message = `Your password reset url is as follows \n\n
//    ${resetUrl}\n\n If you have not requested this email,  this ingone it`

//    try{




//    }catch(error){
//     user.resetPasswordToken = undefined;
//     user.resetPasswordTokenExpire = undefined;
//     await user.save({validateBeforeSave:false})
//     return next(new ErrorHandler(error.message),500)
//    }
// })
