import express from "express";
import { connectDB } from "./utils/databaseConnection.js";

import MovieRoute from "./routes/movies.js";
import UserRoute from "./routes/user.js";

const PORT = 3000

const app = express();

connectDB()



app.use(express.json())

app.use('/api/movies',MovieRoute)
app.use('/api/users',UserRoute)

app.listen(PORT, ()=>{console.log(`Server Running Successfully... ${PORT}`)})
