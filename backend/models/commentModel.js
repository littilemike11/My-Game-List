import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  // shoudl this be whole user obj or just userId string
  userID: {
    type: String,
    required: true,
  },
  // comments come from reviews or posts/discussions
  parentType: {
    type: String, // either "Review" or "Post"
    required: true,
  },
  parentID: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
