import express from "express";

const User = express.Router()

User.post('/signup',registerUser)
User.post('/login',loginUser)