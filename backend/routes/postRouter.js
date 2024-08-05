import express from "express";
const router = express.Router();
import Post from "../models/postModel.js";
import User from "../models/userModel.js";
//get a specific post
router.get("/posts/:id", async (req, res) => {
  try {
    //get info from params
    const id = req.params.id;

    //get post from db
    let post = await Post.findById(id);
    if (!post) {
      //if post not found send error
      res.status(404).send("Post not found");
    } else {
      //otherwise send post
      res.status(200).send(post);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// get all posts that exist
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// get all posts from a specific user
// idk if this should be in posts or user
router.get("/posts/fromUser/:uid", async (req, res) => {
  try {
    const uid = req.params.uid;

    //method 1 find all post from same userid
    // const allPosts = await Post.find({ userID: uid });
    // res.status(200).send(allPosts);

    //method 2 access posts from user
    let foundUser = await User.findById(uid).populate("posts");
    if (!foundUser) {
      res.status(404).send("User not found");
    }
    else{
      const posts = foundUser.posts;
    res.status(200).send(posts);
    }
    
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//66a97328dcac7480184e58f0
//66a97300dcac7480184e58ee
//create a post
router.post("/posts", async (req, res) => {
  try {
    // get info from req body
    const { userID, content } = req.body;
    //get user
    let foundUser = await User.findById(userID);
    if (!foundUser) {
      res.status(404).send("User not found");
    }

    //create new post
    const newPost = new Post({ userID, content });
    //save post to mongodb
    await newPost.save();
    //which res should i send A?
    // only show curr post
    res.status(201).send(newPost);

    //add post to user collection
    foundUser.posts.push(newPost);
    await foundUser.save();
    //or B?
    // res.status(200).send(foundUser);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//update a post

//delete a post
export default router;
