import Review from "../models/reviewModel.js";

// add review
export const addReview = async (req, res) => {
  try {

    const { movieId, review, reviewId, datetime } = req.body;
    const user = req.user.userDetails;
    console.log(user)
    await Review.create({
      reviewId,
      review,
      username: user.name,
      userId: user._id,
      movieId,
      datetime,
    });

    return res.status(201).json({ status: true, reviewId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server issue :(", status: false });
  }
};

//based on reviewid
export const editReview = async (req, res) => {
  try {
    const { reviewId, review } = req.body;

    await Review.updateOne(
      { reviewId },
      {
        $set: {
          review,
          datetime: new Date(),
        },
      }
    );
    res.status(200).json({ status: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server issue :(", status: false });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    await Review.deleteOne({ reviewId });

    res.status(200).json({ status: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server issue :(", status: false });
  }
};

export const getReviews = async (req, res) => {
  try {
    const { movieId } = req.params;

    const reviews = await Review.find({ movieId });

    return res.status(200).json({ status: true, reviews });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server issue :(", status: false });
  }
};