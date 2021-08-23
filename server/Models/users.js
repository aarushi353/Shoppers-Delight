const mongoose = require('mongoose');

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
    }
})

const Users = new mongoose.model('Users',userSchema);

module.exports = Users;