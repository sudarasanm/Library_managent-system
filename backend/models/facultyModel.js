const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
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
        
})

let schema = mongoose.model("Faculty",facultySchema)

module.exports = schema