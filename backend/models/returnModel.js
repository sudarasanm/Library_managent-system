const mongoose = require('mongoose');


const returnSchema = new mongoose.Schema({
    register :{
        type : String,
        required: true,
        trim: true 
    },
    name :{
        type : String,
        required: [true, "Enter the Book Name" ],
        trim: true,
        maxLength:100
    },
    bookid :{
        type : String,
        required: true,
        trim: true
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
    },
    active :{
        type : String,
        default: "Return"
    }
})

let schema = mongoose.model("Return",returnSchema)

module.exports = schema