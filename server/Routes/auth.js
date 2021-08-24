const User = require('../Models/users'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn } = require('../middlewares');


router.post('/register',async(req,res)=>{

    const {email,fname,lname,password}=req.body;

    const user = new User({ email, fname,lname });

    const registeredUser = await User.register(user, password);
    registeredUser.save()
    console.log(registeredUser)

    req.login(registeredUser, err => {
        if (err) { 
            console.log(err)
        }
    });
    res.json(req.user)
})

router.post('/login',passport.authenticate("local",{
    // successRedirect: "/secret",
    // failureRedirect: "/login"
}), (req, res) => {
    res.json(req.user)
})

router.get('/logout',(req,res)=>{
    try{
        req.logout();
        res.send("Logged out user")
    }catch(e){
        res.send(e);
    }
})
router.get('/check',isLoggedIn,(req,res)=>{
    res.send("User is logged in")
})

module.exports=router;