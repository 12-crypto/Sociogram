const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const {MONGOURI} = require('./keys');

require('./models/user')

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    
mongoose.connect(MONGOURI)
    mongoose.connection.on('connected',()=>{
    console.log("Database connected");
    
})
mongoose.connection.on('error',(err)=>{
    console.log("error in connecting to database:",error);
    
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT);
})