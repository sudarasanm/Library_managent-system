const mongoose = require('mongoose');


const returnSchema = new mongoose.Schema({
    userId :{
        type : String,
        required: true,
        trim: true,
        maxLength:100
    },
    bookId :{
        type : String,
        required: true,
        trim: true,
        maxLength:100  
    },
    role:{
        type: String,
        enum:{
            values: [
                'Student',
                'Faculty',
            ],
            message: "Select the correct Role"
        } 

    },
    returnDate :{
        type : Date,
        default: Date.now
    }
})

let schema = mongoose.model("Return",returnSchema)

module.exports = schema