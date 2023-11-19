import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    //name, director, year, language, rating
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        
        ref: "User",
      },
    
    
    name:{
        type:String,
        required: true
    },
    director:{
        type:String,
        required: true
    },
    year:{
        type:String,
        required: true
    },
    language:{
        type:String,
        required: true
    },
    rating:{
        type:Number,
        required: true
    },


},{timestamps:true})

export default mongoose.model("movies",movieSchema);

