const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    sellingamount:{
        type:Number,
        required:true,
    },
    actualamount:{
        type:Number,
        required:true,
    },
    discount:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    image:[{url:String}],
    isDiscounted:{
        type:Boolean,
        default:false,
    },
    discountedAmount:{
        type:Number,
    },
    reviews:[{
        reviewBy:String,
        stars:{
            type:Number,
            min:0,
            max:5,
        },
        description:String
    }]
},{timestamps:true})

const Products = new mongoose.model("Products",productSchema);

module.exports = Products;