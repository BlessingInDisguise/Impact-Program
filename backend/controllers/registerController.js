const user = require('../models/userModel');
const bcrypt = require('bcrypt');

const handelNewUser = async (req,res) => {
    const {name,email,password} = req.body;

    if(!name || !email || !password){return res.status(400) .json(`message:Please fill all the fields`)}
    const userExist = await user.findOne({email}).exec();
    if(userExist){return res.status(400).json(`message:User already exist`)}

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);

        //create and store the new user
        const result = await user.create({
            "name": name,
            "email": email,
            "password": hashedPwd
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${name} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
    

}

module.exports = {handelNewUser};