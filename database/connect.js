const Mongoose = require("mongoose");
const dotenv = require("dotenv");


class dbConnect {
    connect(){
        dotenv.config();
        Mongoose.connect(process.env.DB_CONNECT,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        },(err) => { 
            if(err) throw new Error("Error connection to DB");
            console.log("Connected to DB");
         })
    }
}

module.exports = new dbConnect();