const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
        name :{
            type : String,
            required: [true, "Enter the Your Name" ],
            trim: true,
            maxLength:100
        },
        register :{
            type : String,
            required: [true, "Enter the Register Number" ],
            trim: true,
            maxLength:100  
        },
        gender :{
            type : String,
            required: [true, "Enter the Register Number" ],
            trim: true,
            enum:{
                values: [
                    'Male',
                    'Female',
                    'Other'
                ],
                message: "Select the correct Gender"
            } 
        },
        department :{
            type : String,
            required: [true, "Enter Your  Department" ],
            trim: true,
            enum:{
                values: [
                    'Information Technology',
                    'Computer Science',
                    'ECE',
                    'EEE',
                    'Mech',
                    'civil'
                ],
                message: "Select the correct Department"
            } 
        },
        year :{
            type : String,
            required: [true, "Enter the Stock value" ],
            trim: true,
            enum:{
                values: [
                    '1 year',
                    '2 year',
                    '3 year',
                    '4 year',
                ],
                message: "Select the correct Year"
            } 
        }


})

let schema = mongoose.model("Student",studentSchema)

module.exports = schema