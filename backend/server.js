import express from 'express';
import data from './data.js'
import cors from 'cors';
const app = express();
app.use(cors()) // include before other routes

app.get('/api/products/:id', (req,res)=>{
    const product = data.products.find((x)=> x._id === req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message:'Product not found'});
    }
});


app.get('/api/products', (req,res)=>{
    res.send(data.products);
});

app.get('/',(req,res)=>{
    res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server running at ${port}`);
});