import mongoose from "mongoose";
const ConnectDB = async () =>{
    try{
        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.DATAB_URL)
            console.log("connected")
        }
    } 
    catch (error){

    }
}
export default ConnectDB;