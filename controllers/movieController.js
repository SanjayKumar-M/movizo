import expressAsyncHandler from "express-async-handler";
import movies from "../model/Movies.js";

//methods to create: 
// getMovies, getMovieById, createMovie,deleteMovie,updateMovie

const getMovies = expressAsyncHandler(async (req,res)=>{

    const Movies = await movies.find({ user_id: req.user.id })
    res.status(200).json(Movies)
}) 

const createMovie = expressAsyncHandler(async(req,res)=>{
    const {name,director,year,language,rating} = req.body;

    if(!name || !director || !year || !language || !rating){
        res.status(400).json({message:"Please enter the details"});
    }
    const newMovie = await movies.create({
        name,director,year,language,rating, user_id: req.user.id,
    })

    res.status(201).json(newMovie)
})

const getMoviesByFilter = expressAsyncHandler(async (req, res) => {
    const { year, language, name, director, rating } = req.query;


    const filter = {user_id: req.user.id};

    if (year) filter.year = year;
    if (language) filter.language ={$regex: new RegExp( language, 'i' )};
    if (name) filter.name = { $regex: new RegExp(name, 'i') };
    if (director) filter.director = { $regex: new RegExp(director, 'i') }; 
    if (rating) filter.rating = rating;
    
    const filteredMovies = await movies.find(filter);

    res.status(200).json(filteredMovies);
});


const getMovie = expressAsyncHandler(async (req, res) => {
    const { movieName } = req.params;

   
    const movie = await movies.findOne({ name: { $regex: new RegExp(movieName, 'i') },user_id: req.user.id });

    if (!movie) {
        return res.status(404).json({ message: 'Movie not found.' });
    }

    res.status(200).json(movie);
});


const updateMovie = expressAsyncHandler(async (req, res) => {
    const { movieName } = req.params;
    const { name, director, year, language, rating } = req.body;

    const updatedMovie = await movies.findOneAndUpdate(
        { name: { $regex: new RegExp(movieName, 'i') }, user_id: req.user.id },
        { name, director, year, language, rating },
        { new: true } 
    );

    if (!updatedMovie) {
        return res.status(404).json({ message: 'Movie not found.' });
    }

    res.status(200).json(updatedMovie);
});


const deleteMovie = expressAsyncHandler(async (req, res) => {
    const { movieName } = req.params;

    const movie = await movies.findOne({
        name: { $regex: new RegExp(movieName, 'i') },
        user_id: req.user.id.toString(),
    });

    if (!movie) {
        return res.status(404).json({ message: 'Movie not found.' });
    }

    await movies.deleteOne({ _id: movie._id });

    res.status(200).json({ message: 'Movie deleted successfully.' });
});






export {getMovies, createMovie, getMoviesByFilter,getMovie ,updateMovie, deleteMovie}