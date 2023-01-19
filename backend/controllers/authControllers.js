const user = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const handelLogin = async (req,res)=> {
    
    try{
        const foundUser = req.user;
        //create JWT
        const token = jwt.sign({id:foundUser._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE});
        // res.cookie("AccessToken", token, {
        //     expires: new Date(Date.now() + 2589000),
        //     httpOnly: true,
        //     secure: true, 
        //     sameSite: 'None'
        // });
        res.status(200).json({'message': 'Login succesful','jwt':token});
    }catch(err){
        res.json({'message':err});
    }
    
}

module.exports = {handelLogin};