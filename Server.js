import express from "express";
import { connectDB } from "./utils/databaseConnection.js";

import MovieRoute from "./routes/movies.js";


const PORT = 3000

const app = express();

connectDB()



app.use(express.json())

app.use('/movies',MovieRoute)


app.listen(PORT, ()=>{console.log(`Server Running Successfully... ${PORT}`)})
