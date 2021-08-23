const express = require('express');
const app = express();
const cors = require('cors');

if(process.env.NODE_ENV !=="production"){
    const dotenv = require('Dotenv').config();
    console.log("dotenv running")
}
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

app.use(express.urlencoded())
app.use(express.json())

const PORT = process.env.PORT || 3001;
app.listen(PORT,(req,res)=>{
    console.log(`Sever running on port ${PORT}`);
})