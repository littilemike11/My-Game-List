import express from "express";
const router = express.Router();

// get all comments from a specific objid
router.get("/commentsFrom/:oid", async (req, res) => {
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
    const posts = foundUser.posts;
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
