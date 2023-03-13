const mongoose = require('mongoose');


const reportSchema = new mongoose.Schema({
    register: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
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
    returnDate: {
        type: String,
    },
    purchaseDate: {
        type: String,
    },
    active: {
        type: String,

    }
})

let schema = mongoose.model("Report", reportSchema)

module.exports = schema