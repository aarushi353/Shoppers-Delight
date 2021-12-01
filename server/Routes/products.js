const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Products = require('../Models/products')

router.get('/',async (req,res)=>{
    try{
        const {number,category}=req.query;
        const items = await Products.find(category).limit(number);
        res.json(items);
    }catch(e){
        res.status(400).json({"error":e.message})
    }
})

router.get('/search',async(req,res)=>{
    try{
        const {title}=req.query;
        const items = await Products.find(title);
        res.json(items);
    }catch(e){
        res.status(400).json({"error":e.message})
    }
})

router.post('/',async(req,res)=>{
    try{
        const {title,description,sellingamount,actualamount, discount, category,image}=req.body;
        const newProduct = new Products({title,description,sellingamount,actualamount, discount, category,image});
        await newProduct.save();
    }catch(e){
        res.status(400).json({"error":e.message})
    }
})

router.put('/',async(req,res)=>{
    const {_id}=req.body;
    try{
        const newProduct = new Products.updateOne({_id},{...req.body});
        await newProduct.save();    
    }catch(e){
        res.status(400).json({"error":e.message})
    }
})

router.delete('/',(req,res)=>{
    try{
        const {_id}=req.body;
        Products.findByIdAndDelete(_id);
    }catch(e){
        res.status(400).json({"error":e.message})
    }

})





module.exports=router;