const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./Models/users')
const passport = require('passport');
const LocalStrategy = require('passport-local');
var session = require('express-session')
const authRoutes = require('./Routes/auth');
const productRoutes = require('./Routes/products');


if(process.env.NODE_ENV !=="production"){
    const dotenv = require('Dotenv').config();
    console.log("Environment variables loaded")
}
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))

// Session

// app.set('trust proxy', 1) 
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
      //   secure: true
   }
  }))

// Passport

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({
  usernameField: 'email'
}, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/auth',authRoutes);
app.use('/products',productRoutes);



const PORT = process.env.PORT || 3001;
app.listen(PORT,(req,res)=>{
    console.log(`Sever running on port ${PORT}`);
})


mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connected")
});