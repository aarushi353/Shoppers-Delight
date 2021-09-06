const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Users = require('../Models/users');

router.get('/',async(req,res)=>{
    try{
        const users = Users.find({});
        res.json(users)
    }catch(e){
        res.status(200).json({"error":e.message})
    }
})

router.post('/admin',async(req,res)=>{
    const {_id,adminStatus}=req.body;
    try{
        const user = Users.updateOne({_id},{isAdmin:adminStatus});
        user.save()
    }catch(e){
        res.status(200).json({"error":e.message})
    }
})