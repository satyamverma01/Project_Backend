import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";
//APPROACH-2
const connectDB=async()=>{
    try{
        //connectionInstance is an object returned when connected
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected ${connectionInstance.connection.host}`)
    }catch(error){
        console.error("ERROR",error);
        process.exit(1);
    }
}
export default connectDB;