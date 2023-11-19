import express from "express";

const Movies = express.Router()



Movies.route('/').get(getMovies)
Movies.route('/').post(createMovie)
Movies.route('/').post(getMoviebyId)
Movies.route('/').post(deleteMovie)