import express from "express"
 const router = express.Router();
import {
  addReview,
  editReview,
  deleteReview,
  getReviews,
} from "../controllers/reviewController.js";
import fetchUser from "../middlewares/fetchUser.js";

router.post("/addreview", fetchUser, addReview);
router.put("/editreview", editReview);
router.delete("/deletereview/:reviewId", deleteReview);
router.get("/getreviews/:movieId", getReviews);

export default router;
