import expressAsyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../model/Users.js'
const registerUser = expressAsyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400);
     
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400);
      
    }
  
   
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
  
    console.log(`User created ${user}`);
    if (user) {
      res.status(201).json({ _id: user.id, email: user.email });
    } else {
      res.status(400);

    }
    res.json({ message: "Register the user" });
  });
  
 
  const loginUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
   
    }
    const user = await User.findOne({ email });
   
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        "thetokensecret",
        { expiresIn: "15m" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
    
    }
  });
  
  
  const currentUser = expressAsyncHandler(async (req, res) => {
    res.json(req.user);
  });

  export {registerUser, loginUser, currentUser}