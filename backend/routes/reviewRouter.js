import express from "express";
const router = express.Router();
import User from "../models/userModel";
import Review from "../models/reviewModel";

//create a review
router.post("review", async (req, res) => {
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
    const newReview = Review({});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
