const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')

if(process.env.NODE_ENV !=="production"){
    const dotenv = require('Dotenv').config();
    console.log("Environment variables loaded")
}
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

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