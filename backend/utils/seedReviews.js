import mongoose from "mongoose";
import Review from "../models/reviewModel.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";

const currentFileUrl = import.meta.url;
const currentDir = dirname(fileURLToPath(currentFileUrl));

// Import the 'path' module explicitly
import * as path from "path";

const parentFolder = path.resolve(currentDir, "../");
dotenv.config({ path: path.join(parentFolder, ".env") });
// console.log(process.env.MONGO_URI);

// Connect to MongoDB
mongoose
  //process.env.MONGO_URI gave error
  .connect(
    "mongodb+srv://michaeledquilan:avBMVN4pNUArKfQP@cluster0.ipfvapa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error(err));

const testReviews = [
  {
    userID: "66b175a3628fc91408892e6b", //cryptoNinja
    content: "I love this game",
    gameID: "Halo3", //game title vs id
    score: 5,
    title: "Halo 3 is a MasterPiece!!!",
  },
  {
    userID: "66b175a3628fc91408892e6b", //cryptoNinja
    content: "I hate this game",
    gameID: "Halo 5",
    score: 1,
    title: "Halo 5 a masterpiece?",
  },
  {
    userID: "66b175a3628fc91408892e6c", //musicMaestro
    content: "Nostalgia is best",
    gameID: "COD",
    score: 4.5,
    title: "Cod brings me back",
  },
  {
    userID: "66b175a3628fc91408892e6d", //gamerGalaxy
    content: "its an ok game",
    gameID: "Sims 3",
    score: 3,
    title: "Sims is mid",
  },
  {
    userID: "66b175a3628fc91408892e6e", //artisticSoul
    content: " all characters play the same",
    gameID: "Suicide Squad:Kill the justice league",
    score: 2,
    title: "I wish it was better",
  },
];

// Seed the database with starter data
async function seedData() {
  try {
    // First, clear the database of existing modules
    await Review.deleteMany({});

    // Insert starter modules
    await Review.insertMany(testReviews);

    console.log("Database seeded!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
