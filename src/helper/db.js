import mongoose from "mongoose";
export const connectDb= async()=>{
    try{
const connection=await mongoose.connect(process.env.MONGO_DB_URL,{
    dbName:"work_manager"
});
console.log("db Connect ...");
console.log(connection);
    }catch(err){
        console.log("Fiald to connection with databases");
        console.log(err);

    }
}