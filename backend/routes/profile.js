const express = require("express");

const router = express.Router();
const passport = require("passport");


router.get("/",passport.authenticate("jwt",{session:false}),(req,res)=>{
    res.json(req.user);
});

module.exports = router;