import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  gameID: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
