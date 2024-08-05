import express from "express";
const router = express.Router();
import User from "../models/userModel";
import Review from "../models/reviewModel";
// import Game from "../models/gameModel"

//create a review
router.post("reviews", async (req, res) => {
  try {
    const { userID, gameID, content, score, title } = req.body;

    //is it good/ efficient to have these checks when in ui these errors shouldnt be possible
    // check if user exists
    const foundUser = await User.findById(userID);
    if (!foundUser) {
      res.status(404).send("User not Found");
    }
    //check if game exits
    const foundGame = await Game.findById(gameID);
    if (!foundGame) {
      res.status(404).send("Game Does Not Exist");
    }

    //create new review
    const newReview = new Review({userID, gameID, content, score, title});
    //save review to mongo db
    await newReview.save()
    // send new review as response
    res.status(201).send(newReview)

    // update user reviews collection
    foundUser.reviews.push(newReview);
    await foundUser.save();

    // update game reviews collection
    foundGame.reviews.push(newReview);
    await foundGame.save();
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// get review by id
router.get("/reviews/:id", async(req,res)=>{
  try{
    const id = req.params.id;
    //find review by id from db
    let foundReview = await Review.findById(id)
    if(!foundReview){
      res.status(404).send("Review not Found")
    }
    else{
      res.status(200).send(foundReview)
    }

  }catch(error){
    console.log(error)
    res.status(400).send(error)
  }
})

//get all reviews from user
router.get("/reviews/fromUser/:uid", async(req,res)=>{
  try{
    const uid = req.params.uid;
  //method 1 search all posts with same userID
  // let allReviews = await Review.find({userID:uid})
  // res.status(200).send(allReviews)

  //method 2 search all reviews that exist in user 
  let foundUser = await User.findById(uid).populate("reviews");
  if(!foundUser){
    res.status(404).send("User not Found")
  }
  else{
    const reviews = foundUser.reviews
    res.status(200).send(reviews)
  }
  }catch(error){
    console.log(error)
    res.status(400).send(error)
  }
})

//get all reviews from game
// router.get("/reviews/fromGame/:gid", async(req,res)=>{
//   try{
//     const gid = req.params.uid;
//   //method 1 search all posts with same gameID
//   // let allReviews = await Review.find({gameID:gid})
//   // res.status(200).send(allReviews)

//   //method 2 search all reviews that exist in user 
//   let foundGame = await Game.findById(gid).populate("reviews");
//   if(!foundGame){
//     res.status(404).send("Game not Found")
//   }
//   else{
//     const reviews = foundGame.reviews
//     res.status(200).send(reviews)
//   }
//   }catch(error){
//     console.log(error)
//     res.status(400).send(error)
//   }
// })

//get all reviews that exist
router.get("/reviews", async (req,res)=>{
  try{
    let reviews = await Review.find()
    res.status(200).send(reviews)
  }catch(error){
    console.log(error)
    res.status(400).send(error)
  }
})
//update review by id
router.put("/reviews/:id", async(req,res)=>{
  try{
    const id = req.params.id;
    const {content,score,title} = req.body
    let foundReview = await Review.findByIdAndUpdate(id,{content:content,score:score,title:title},{new:true})
    if(!foundReview){
      res.status(404).send("Review not Found")
    }else{
      res.status(200).send(foundReview)
    }

  }catch(error){
    console.log(error)
    res.status(400).send(error)
  }
})

//delete review by id
// should the comments belonging to that post also be deleted 

router.delete("/reviews/:id",async(req,res)=>{
  try{
    const id = req.params.id;
    let foundReview = Review.findByIdAndDelete(id);
    if(!foundReview){
      res.status(404).send("Review not Found")
    }
  }catch(error){
    console.log(error)
    res.status(400).send(error)
  }
})

