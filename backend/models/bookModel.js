const { compare } = require("bcrypt");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
        name :{
            type : String,
            required: [true, "Enter the Book Name" ],
            trim: true,
            maxLength:100
        },
        invoice :{
            type : Number,
            required: [true, "Enter the Invoice Number" ],
            trim: true,
            maxLength:100  
        },
        author :{
            type : String,
            required: [true, "Enter the Author Number" ],
            trim: true,
           
        },
        isbn :{
            type : Number,
            required: [true, "Enter the ISBN Number" ],
            trim: true,
             
        },
        cost :{
            type : Number,
            default: 0.0,
            trim: true,
            
        },
        department :{
            type : String,
            required: [true, "Enter the  Department" ],
            trim: true,
            enum:{
                values: [
                    'Information Technology',
                    'Computer Science',
                    'Science',
                    'comsics',
                    'Drama',
                    'Maths'
                ],
                message: "Select the correct category"
            } 
        },
        bookid :{
            type : Number,
            required: [true, "Enter the Book ID" ],
            trim: true
        }


})

bookSchema.method.isValidIsbn = async function(enterdisbn){
    return await compare(enterdisbn,this.isbn)
}
let schema = mongoose.model("Book",bookSchema)

module.exports = schema