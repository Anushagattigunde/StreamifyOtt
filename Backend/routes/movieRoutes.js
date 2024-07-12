import express from "express"
const router = express.Router();

import fetchUser from "../middlewares/fetchUser.js";

import {addMovie,getMovies,deleteMovies} from "../controllers/movieController.js";

router.post("/addmovie", fetchUser, addMovie);
router.get("/getmovies", fetchUser, getMovies);
router.delete("/deletemovie/:id", fetchUser, deleteMovies);


export default router;

