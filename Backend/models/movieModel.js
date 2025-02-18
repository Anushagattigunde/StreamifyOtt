import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  genre_ids: {
    type: Array,
    required: true,
  },
  poster_path: {
    type: String,
  },
  release_date: {
    type: String,
    required: true,
  },
  vote_average: {
    type: Number,
    required: true,
  },
  mediaType: {
    type: String,
    required: true,
  },
  saveId: {
    type: String,
    required: true,
    unique: true,
  },
});


const Movie = mongoose.model("movies", movieSchema);
export default Movie;