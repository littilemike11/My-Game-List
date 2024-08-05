import express from "express";
import Post from "../models/postModel";
import Review from "../models/reviewModel";
const router = express.Router();

// get all comments from a specific objid
router.get("/comments/fromParent/:pid", async (req, res) => {
  try {
    const pid = req.params.uid;

    //method 1 find all comments from same parent
    //ie . a the thread of discussion
    const allComments = await Comment.find({ parentID: pid });
    res.status(200).send(allComments);

  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// get all specific comment from id
//props wont need
router.get("/comments/:id", async (req,res)=>{
  try{
    const id = req.params.id;

    //get post from db
    let comment = await Comment.findById(id);
    if (!comment) {
      //if post not found send error
      res.status(404).send("Comment not found");
    } else {
      //otherwise send post
      res.status(200).send(comment);
    }
  }catch(error){
    console.log(error)
    res.status(400).send(error)
  }
})
// post comment
router.post("/comments", async (req, res) => {
  try {
    const { userID, parentType,parentID, content } = req.body;

    //is it good/ efficient to have these checks when in ui these errors shouldnt be possible
    // check if user exists
    const foundUser = await User.findById(userID);
    if (!foundUser) {
      res.status(404).send("User not Found");
    }
    //check if game exits
    //
    let parent = parentType==="Post" ? Post : Review
    const foundParent = await parent.findById(parentID);
    if (!foundParent) {
      res.status(404).send("Game Does Not Exist");
    }
    //create new comment
    const newComment = new Comment({userID, parentID, content, parentType});
    //save comment to mongo db
    await newComment.save()
    // send new comment as response
    res.status(201).send(newComment)

    // update user comments collection
    foundUser.reviews.push(newComment);
    await foundUser.save();

    // update parent comment collection
    foundParent.comments.push(newComment);
    await foundParent.save();
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
// update comment
router.put("/comments/:id", async(req,res)=>{
  try{
    const id = req.params.id;
    //should only be able to edit content of comment
    const {content} = req.body
    let foundComment = await Comment.findByIdAndUpdate(id,{content:content},{new:true})
    if(!foundComment){
      res.status(404).send("Comment not Found")
    }else{
      res.status(200).send(foundComment)
    }

  }catch(error){
    console.log(error)
    res.status(400).send(error)
  }
})

//delete comment
//where does authentication happen here on frontend?
// ie only comment owner and post owner can delete comments
router.delete("/comments/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let foundComment = await User.findByIdAndDelete(id);
    if (!foundComment) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send("User deleted successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

