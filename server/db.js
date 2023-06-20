import mongoose from "mongoose";

const Connection = async(username,password) =>{
    const URL =`mongodb+srv://${username}:${password}@cluster0.ek8sc.mongodb.net/SIHPROJECT?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser:true});
        console.log("Database Connected Successfully")
    }
    catch(err){
        console.log("Error while connecting database",err);
    }
};
export default Connection;