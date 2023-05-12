const catchAsyncError = require('../middlewares/catchAsyncError')
const sendToken = require("../utils/jwt")
const User = require("../models/userModel")
const ErrorHandler = require('../utils/errorHandler')
const { isValidPassword } = require("../models/userModel")

exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { username, password } = req.body
    const user = await User.create({
        username,
        password
    })
    sendToken(user, 201, res)
})

exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { username, password } = req.body


    if (!username || !password) {
        return next(new ErrorHandler('Enter the username &  password', 400))
    }

    //finding the user database
    const user = await User.findOne({ username });
    if (!user) {
        return next(new ErrorHandler('Invalid username or Password', 401))
    }
    const pass = await User.findOne({password})
    if (!pass) {
        return next(new ErrorHandler('Invalid username or  Password', 401))
    }
    sendToken(user, 201, res)

})









