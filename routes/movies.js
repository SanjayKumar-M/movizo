import express from "express";
import { getMovies, createMovie,getMoviesByFilter } from "../controllers/movieController.js";

const MovieRoute = express.Router()



MovieRoute.route('/').get(getMovies)

MovieRoute.route('/').post(createMovie)
MovieRoute.route('/filter').get(getMoviesByFilter);

// MovieRoute.route('/:id').get(getMoviebyId)

// MovieRoute.route('/:id').delete(deleteMovie)

// MovieRoute.route('/:id').put(updateMovie)

export default MovieRoute