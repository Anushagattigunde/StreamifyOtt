import Movie from "../models/movieModel.js";
import { v4 } from "uuid";
export const addMovie = async (req, res, next) => {
  try {
    const userId = req.user.userDetails._id;
    console.log(req.user);
    const {
      id,
      mediaType,
      genre_ids,
      title,
      poster_path,
      release_date,
      vote_average,
    } = req.body;

    const findMovie = await Movie.findOne({ id, userId });

    if (findMovie) {
      return res.json({ status: false, msg: "Movie is already saved :)" });
    }

    const movie = await Movie.create({
      id,
      userId,
      mediaType,
      genre_ids,
      title,
      poster_path,
      release_date,
      vote_average,
      saveId: v4(),
    });
    return res.json({ status: true, msg: "Movie Saved successfully :)" });
  } catch (error) {
    console.log(error);
    return res.json({ status: false, msg: "Server issue :(" });
  }
};

export const getMovies = async (req, res, next) => {
  try {
    const movie = await Movie.find({ userId: req.user.userDetails._id });
    return res.json({ status: true, movies: movie });
  } catch (error) {
    return res.json({ status: false, msg: "Server issue :(" });
  }
};
export const deleteMovies = async (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    const movie = await Movie.deleteOne({
      userId: req.user.userDetails._id,
      id: movieId,
    });
    return res.json({ status: true, msg: "Movie is unsaved successfully" });
  } catch (error) {
    return res.json({ status: false, msg: "Server issue :(" });
  }
};