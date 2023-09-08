import mongoose from "mongoose";

const Connection = async(username,password) =>{
    const URL =`mongodb+srv://mahesh:Kln1iWjNOHrp29Ad@cluster0.ek8sc.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser:true});
        console.log("Database Connected Successfully")
    }
    catch(err){
        console.log("Error while connecting database",err);
    }
};
export default Connection;
