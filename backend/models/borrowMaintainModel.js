const mongoose = require('mongoose');


const borrowMaintainSchema = new mongoose.Schema({
    register: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: [true, "Enter the Book Name"],
        trim: true,
        maxLength: 100
    },
    bookid: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: {
            values: [
                'Student',
                'Faculty',
            ],
            message: "Select the correct Role"
        }
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    active: {
        type: String,
        default: "Borrow"
    }
})

let schema = mongoose.model("BorrowMaintain", borrowMaintainSchema)

module.exports = schema