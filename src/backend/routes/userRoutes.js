const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//get a user
router.get("/users/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let foundUser = await User.findById(id);
    if (!foundUser) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(foundUser);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
//get all users
router.get("/users", async (req, res) => {
  try {
    let allUsers = await User.find();
    if (!allUsers) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(allUsers);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//create a user
router.post("/users", async (req, res) => {
  try {
    const { username, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, hashedPassword });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.log("error" + error);
    res.status(400).send(error); //
  }
});
//update user
router.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { username, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, hashedPassword },
      { new: true }
    );
    if (!updatedUser) {
      //create user
      const newUser = new User({ username, hashedPassword });
      await newUser.save();
      res.status(201).send(newUser);
      //or should i just return error cuz id doesnt exist
      //res.status(404).send("User not Found")
    } else {
      res.status(200).send(updatedUser);
    }
  } catch (error) {
    console.log("error" + error);
    res.status(400).send(error); //
  }
});

//delete user
router.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let foundUser = await User.findByIdAndDelete(id);
    if (!foundUser) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send("User deleted successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
