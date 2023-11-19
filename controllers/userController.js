import expressAsyncHandler from "express-async-handler";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserSchema from "../model/Users.js";

const registerUser = expressAsyncHandler(async(req,res)=>{
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message: "All fields are required!"})

    }
    const isUserAvailable = await UserSchema.findOne({email});
    if(isUserAvailable){
        return res.status(400).json({message:"User already registered! Login"})
    }
    const hashedPasswd = await bcrypt.hash(password, 15);
    const Registration = await UserSchema.create({
        name: name, 
        email: email,
        password: hashedPasswd
    })

    if(!Registration){
        return res.status(400).json({message: "Data is not valid"})
    }

    return res.status(201).json({
        _id:Registration._id,
        name: Registration.name,
        email: Registration.email
    })

    

});

const currentUser = expressAsyncHandler(async (req,res)=>{
    const findUser = await UserSchema.findOne({name});
    res.json(req.findUser)
        
})

export {registerUser, currentUser}
