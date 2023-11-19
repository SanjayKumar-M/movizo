import express from "express";
import { getMovies, createMovie,getMoviesByFilter,updateMovie, getMovie, deleteMovie } from "../controllers/movieController.js";

const MovieRoute = express.Router()



MovieRoute.route('/').get(getMovies)

MovieRoute.route('/').post(createMovie)

MovieRoute.route('/filter').get(getMoviesByFilter);

MovieRoute.route('/:movieName').get(getMovie)

MovieRoute.route('/delete/:movieName').delete(deleteMovie)

MovieRoute.route('/update/:movieName').put(updateMovie)

export default MovieRoute