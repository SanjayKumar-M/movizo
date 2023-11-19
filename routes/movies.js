import express from "express";

const MovieRoute = express.Router()



MovieRoute.route('/').get(getMovies)

MovieRoute.route('/').post(createMovie)

MovieRoute.route('/:id').get(getMoviebyId)

MovieRoute.route('/:id').delete(deleteMovie)

MovieRoute.route('/:id').put(updateMovie)

export default MovieRoute