import mongoose from "mongoose";
import { MONGOURL } from "./serverconfig.js";
 
export default async function connect(){
    try{
 await mongoose.connect(process.env.MONGOURL)
  console.log(' connected to  mongodb')
    }
    catch(error){
         console.log(" mongodb connection  is failed")
          console.log(error)
    }
}