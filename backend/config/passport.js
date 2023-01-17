var user = require('../models/userModel');
var JWTStrategy = require('passport-jwt').Strategy;
var LocalStrategy = require('passport-local').Strategy;
var ExtractJWT = require('passport-jwt').ExtractJwt;
var bcrypt = require('bcrypt');

module.exports = function(passport){
    var params = {};
    //import secret key and token
    params.secretOrKey = process.env.JWT_SECRET;
    params.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
    
    passport.use(
        new JWTStrategy(params,function(jwt_payload,next){
            
            user.findOne({_id:jwt_payload.id},function(err,encodedData){
                if(err){
                    return next(err,false);
                }
                if(encodedData){
                    console.log(encodedData)
                    return next(null,encodedData);
                }else{
                    return next(null,false);
                }
            })
        })
    )

    passport.use(
        new LocalStrategy(async(username,password,done)=>{
            try{
                const User = await user.findOne({email:username});
                if(!User){
                    return done(null,false);
                }
                const match = await bcrypt.compare(password, User.password);
                if(match){
                    return done(null,User);
                }else{
                    return done(null,false);
                }
            }catch(err){
                return done(err,false);
            }
        })
    )

    
}
 