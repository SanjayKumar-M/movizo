import mongoose from "mongoose";
import 'dotenv/config'
export const connectDB = async() =>{

    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected Successfully !")

    }

    catch(err){
        console.log(err)
    }

}

