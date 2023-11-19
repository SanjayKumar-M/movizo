import express from "express";

const UserRoute = express.Router()

UserRoute.post('/signup',registerUser)

UserRoute.post('/login',loginUser)


export default UserRoute