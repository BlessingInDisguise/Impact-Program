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
const dbConnect = require("./config/dbconnect");
const PORT = process.env.PORT || 5007;
const expressSession = require('express-session');
const passport = require("passport");
require("./config/passport")(passport);
//connect to database
dbConnect();

app.use(express.json());
//cross origin resource sharing
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome here")
})

//passport middleware
app.use(expressSession({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());
//routes
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));
app.use('/logout', require('./routes/logout'));


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

