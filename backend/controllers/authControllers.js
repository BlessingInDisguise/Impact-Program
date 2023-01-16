const user = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const handelLogin = async (req,res)=> {
    const {email,password} =req.body;
    if(!email || !password) {res.status(401).json({"message" : "Please fill all the fields"})};

    const foundUser = await user.findOne({ email: email })
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    console.log(foundUser.password);
    const match = await bcrypt.compare(password, foundUser.password);
    if(match){
        //create JWT
        const token = jwt.sign({id:foundUser._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE});
        res.cookie("AccessToken", token, {
            expires: new Date(Date.now() + 2589000),
            httpOnly: true,
            secure: true, 
            sameSite: 'None'
        });

        res.status(200).json({'message': 'Login succesful'})
    }
    else{res.status(401).json({'message': 'Invalid credentials'})}

}

module.exports = {handelLogin};