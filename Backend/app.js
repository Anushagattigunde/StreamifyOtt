import express from "express"
import mongoose from "mongoose"
import userRoutes from "./routes/userRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";



const app = express();
import cors from "cors";
app.use(cors());

app.use(express.json());


app.use("/api/auth", userRoutes)
app.use("/api/saved",movieRoutes)
app.use('/api/review', reviewRoutes);

mongoose.connect('mongodb://0.0.0.0:27017/test_db')



app.listen(3001, () => {
    console.log("Server listening on PORT 3001 ");

});



