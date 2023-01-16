const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
//const fileUpload = require("express-fileupload");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const dbConnect = require("./dbconnect");
const PORT = process.env.PORT || 5007;

//connect to database
dbConnect();

app.use(express.json());
//cross origin resource sharing
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome here")
})

//routes
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/auth'));


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

