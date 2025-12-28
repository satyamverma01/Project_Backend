// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
 import express from 'express';
import connectDB from './db/db.js';
const app=express();
//Always wrap try catch when connecting with database
//Always use async await as database connection takes time
//APPROACH-1 (CONNECTION OF DB):-(USING IIFE)
// (async()=>{
//     try{
//         await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
//         app.on("error",(error)=>{
//             console.log("App facing error in communicating with database");
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log("App is listening on port ${process.env.PORT}")
//         })
//     }catch(error){
//         console.error("ERROR",error)
//         throw error;
//     }
// })()
dotenv.config({
    path:'./env'
})
//Approach-2
connectDB();