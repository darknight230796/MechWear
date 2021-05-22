import express from 'express';
//const express = require('express');
import data from './data.js' 
const app = express();
app.get('/api/products', (req,res)=>{
    res.send(data.products);
});
app.get('/',(req,res)=>{
    res.send('Server is ready');
});

app.listen(5000,()=>{
    console.log("Server running at 5000");
});