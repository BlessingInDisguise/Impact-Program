const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set('strictQuery', false);
const connectDatabse = ()=> {
    
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
    })
    .catch((err)=>{
        console.log(`error: ${err}`);
    });

};

module.exports = connectDatabse;

