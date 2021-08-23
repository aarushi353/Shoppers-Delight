const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    product:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
    },
    shipped:Boolean,
    delivered:Boolean,
    quantity:Number,
},{timestamps:true})

const Orders = new mongoose.model("Orders",orderSchema);

module.exports = Orders;