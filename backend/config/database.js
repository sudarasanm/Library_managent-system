const mongoose = require("mongoose")



const connectDatabse = ()=>{
    mongoose.connect(process.env.DBURI,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log("db connected");
    }).catch((err)=>
    console.log(err))
}

module.exports = connectDatabse