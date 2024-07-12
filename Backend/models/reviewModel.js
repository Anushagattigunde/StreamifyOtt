import mongoose from "mongoose"


const reviewSchema = new mongoose.Schema({
  reviewId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  datetime: {
    type: Date,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model('reviews', reviewSchema);
export default  Review;

