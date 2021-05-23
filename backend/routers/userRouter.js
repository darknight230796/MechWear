import express from 'express';
import User from '../models/userModel';
const userRouter = express.Router();
import data from '../data.js'

userRouter.get('/seed',async (req,res)=>{
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
});