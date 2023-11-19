import express from "express";
import { registerUser, currentUser } from "../controllers/userController.js";

const UserRoute = express.Router()

UserRoute.post('/signup',registerUser)

// UserRoute.post('/login',loginUser)

UserRoute.get('/profile/:name',currentUser);


export default UserRoute