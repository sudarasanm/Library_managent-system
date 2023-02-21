const app = require("./app")
const dotenv = require("dotenv")
const path = require("path")
const connectDatabse = require("./config/database")


dotenv.config({path:path.join(__dirname,"config/config.env")})

connectDatabse();

app.listen(process.env.PORT,()=>{
    console.log(`server is listening to the port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})