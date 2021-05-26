import express from 'express';
import data from './data.js'
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
const app = express();
app.use(cors()); // include before other routes
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mechwear',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});
app.get('/api/products/:id', (req,res)=>{
    const product = data.products.find((x)=> x._id === req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message:'Product not found'});
    }
});
app.use('/api/users', userRouter);

app.get('/api/products', (req,res)=>{
    res.send(data.products);
});

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

app.use((err,req,res,next)=>{
    res.status(500).send({message: err.message});
})
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server running at ${port}`);
});