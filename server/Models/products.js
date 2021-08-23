const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
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

module.exports = products;