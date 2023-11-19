import express from "express";
import { connectDB } from "./utils/databaseConnection.js";

import MovieRoute from "./routes/movies.js";
import router from "./routes/userRoutes.js";


const PORT = 3000

const app = express();

connectDB()



app.use(express.json())

app.use('/movies',MovieRoute)
app.use('/users',router)


app.listen(PORT, ()=>{console.log(`Server Running Successfully... ${PORT}`)})
