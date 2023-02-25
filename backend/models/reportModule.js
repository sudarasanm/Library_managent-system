const mongoose = require('mongoose');


const reportSchema = new mongoose.Schema({
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
    purchaseDate :{
        type : Date,
        default: Date.now
    },
    active :{
        type : Boolean,
        default: true
    }
})

let schema = mongoose.model("Report",reportSchema)

module.exports = schema