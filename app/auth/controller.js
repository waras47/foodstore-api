const User = require('../user/model');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config');


const register = async (req, res, next) => {
 try {
     const payload = req.body;

     let user = new User(payload);
     console.log(user);

     await user.save();

     return res.json(user);
     
 } catch(err) {
    console.log(err)

     // (1) cek kemungkinan kesalahan terkait validasi
     if(err && err.name === 'ValidationError') {
         return res.json({
             error: 1,
             message: err.message,
             fields: err.errors
         })
     }

     // (2) error lainnya
     next(err);

 }
}

const localStrategy = async (email, password, done) => {
    try {
      let user = 
      await User 
      .findOne({email})
      .select('-__v -createdAt -updatedAt -cart_items -token');
      if(!user) return done();
      if(bcrypt.compareSync(password, user.password)) {
        ( {password, ...userWithoutPassword} = user.toJSON() );
        return done(null, userWithoutPassword);
  
      }
    }catch(err) {
      done(err, null)
    }
  
    done();
  }
  
  //login
  const login = async (req, res, next) =>{
    passport.authenticate('local', async function(err, user){
      if(err) return next(err);
  
      if(!user) return res.json({error: 1, message: 'Email or Password Incorrect'});
  
      let signed = jwt.sign(user, config.secretkey);
  
      await User.findByIdAndUpdate(user._id, {$push: {token: signed}})
  
      res.json({
        message: 'Login Succesfully',
        user,
        token: signed
      })
    })(req, res, next)
  }
 module.exports = {
  register,
  localStrategy,
  login
 
 }