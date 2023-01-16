const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authControllers');


router.post('/',passport.authenticate('local',{session:false,failureRedirect:"/login"}),authController.handelLogin);

module.exports = router;