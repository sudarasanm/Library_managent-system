const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const userSchema = new mongoose.Schema({
        username :{
            type : String,
            required: [true, "Enter the Your Name" ],
            trim: true,
            maxLength:20,
            unique: true
        },
        password :{
            type : String,
            required: [true, "Enter the Passsword" ],
            trim: true,
            maxLength:20,
            select: false
        },
        resetPasswordToken:String,
        resetPasswordTokenExpire: Date,
        createdAt:{
            type:Date,
            default: Date.now
        }
})

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password,10)
})

userSchema.methods.getJwtToken = function(){
     return jwt.sign({id: this.id},  process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
     })
}

userSchema.methods.isValidPassword = async function(enterdpassword){
   return await bcrypt.compare(enterdpassword, this.password)
}

userSchema.methods.getResetToken = function(){
   const token = crypto.randomBytes(20).toString("hex")
        // generate hash and set to restpasswordToken
   this.resetPasswordToken = crypto.createHash("sha256").update(token).digest('hex')

   //set expire token time
   this.resetPasswordTokenExpire = Date.now() + 30 * 60 * 1000;

   return token
} 



let schema = mongoose.model("User",userSchema)

module.exports = schema