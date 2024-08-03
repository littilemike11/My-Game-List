const mongoose = require("mongoose");
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRouter");

const PORT = 3000;

app.use(express.json());

app.use("/api/v1", userRouter);
app.use("/api/v1", postRouter);

//mongodb for vscode extension

const gameRoomSchema = new mongoose.Schema({
  users: [
    {
      type: String,
      required: true,
    },
  ],
  goal: {
    type: Number,
    required: true,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const gameRoom = mongoose.model("gameRoom", gameRoomSchema);

//QUESTIONS

// does schema get automatically updated on changes
// how to test with nested schema types
// how to get all users

//user ids
//66a96eb6de822fdc1f9b0bed
//66a83b5f6abcaaa4d5bc0717
// create board game
app.post("/play", async (req, res) => {
  try {
    const { users } = req.body;
    let goal = Math.floor(Math.random() * 10);
    const newGameRoom = new gameRoom({ users, goal });
    await newGameRoom.save();
    res.status(201).send(newGameRoom);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

const uri =
  "mongodb+srv://michaeledquilan:avBMVN4pNUArKfQP@cluster0.ipfvapa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectDb() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
    console.log("error: " + error);
  }
}

app.listen(PORT, async () => {
  await connectDb().catch(console.dir);
  console.log(`Express Api: localhost: ${PORT}`);
});
