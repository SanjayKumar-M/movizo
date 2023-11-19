import expressAsyncHandler from "express-async-handler";
import MovieSchema from "../model/Movies.js";

//methods:
// getMovies, getMovieById, createMovie,deleteMovie,updateMovie

const getMovies = expressAsyncHandler(async (req,res)=>{

    const Movies = await MovieSchema.find()
    res.status(200).json(Movies)
}) 

const createMovie = expressAsyncHandler(async(req,res)=>{
    const {name,director,year,language,rating} = req.body;

    if(!name || !director || !year || !language || !rating){
        res.status(400).json({message:"Please enter the details"});
    }
    const newMovie = await MovieSchema.create({
        name,director,year,language,rating
    })

    res.status(201).json(newMovie)
})

const getMoviesByFilter = expressAsyncHandler(async (req, res) => {
    const { year, language, name, director, rating } = req.query;


    const filter = {};

    if (year) filter.year = year;
    if (language) filter.language ={$regex: new RegExp( language, 'i' )};
    if (name) filter.name = { $regex: new RegExp(name, 'i') };
    if (director) filter.director = { $regex: new RegExp(director, 'i') }; 
    if (rating) filter.rating = rating;
    
    const filteredMovies = await MovieSchema.find(filter);

    res.status(200).json(filteredMovies);
});


export {getMovies, createMovie, getMoviesByFilter}