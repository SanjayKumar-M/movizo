import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    //name, director, year, language, rating

    name:{
        type:String,
        required: true
    },
    director:{
        type:String,
        required: true
    },
    year:{
        type:number,
        required: true
    },
    language:{
        type:String,
        required: true
    },
    rating:{
        type:number,
        required: true
    },


},{timestamps:true})

const MovieSchema = mongoose.model("movies",movieSchema);

export default MovieSchema;