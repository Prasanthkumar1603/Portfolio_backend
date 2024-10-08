const mongoose = require('mongoose')


const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected Successfully :)");
     } catch (error) {
        console.log('MongoDB  connection failed:', error);
     }
 }


 module.exports = connectDB;