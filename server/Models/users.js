const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({

    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/.+\@.+\..+/,
    },
    isAdmin:{
        type:Boolean,
        default:false,
        required:true
    },
    orders:[
        { 
           orderId:{
               type:mongoose.SchemaTypes.ObjectId,
               ref:'Orders'
           }
           
        },
    ]
},{timestamps:true})
userSchema.plugin(passportLocalMongoose,{usernameField:"email"});

const Users = new mongoose.model('Users',userSchema);

module.exports = Users;