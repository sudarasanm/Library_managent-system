const catchAsyncError = require('../middlewares/catchAsyncError')
const Error = require('../utils/errorHandler') 
const User = require("../models/userModel")
const ErrorHandler = require('../utils/errorHandler')

exports.registerUser = catchAsyncError (async (req,res,next)=>{
    const {username, password} = req.body
   const user = await User.create({
        username,
        password
    })

    const token = user.getJwtToken();


    res.status(201).json({
        sucess: true,
        user,
        token
    })
})

exports.loginUser = catchAsyncError(async (req,res,next)=>{
    const {username , password} =req.body

    if(!username || password){
        return next(new Error('Invalid  username & password',400))
    }

    //finding the user database
    const user = await User.findone({username}).select('+password');

    if(!user){
        return next(new Error('Invalid username or Password',401))
    }

    if(await user.isValidPassword(password)){
        return next(new Error('Invalid username or Password',401))
    }

    res.status(201).json({
        sucess: true,
        user,
        token
    })

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
