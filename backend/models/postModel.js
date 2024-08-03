import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  // shoudl this be whole user obj or just userId string
  userID: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
