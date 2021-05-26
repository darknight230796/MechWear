import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
const app = express();
app.use(cors()); // include before other routes
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mechwear',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

app.use((err,req,res)=>{
    res.status(500).send({message: err.message});
})
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server running at ${port}`);
});