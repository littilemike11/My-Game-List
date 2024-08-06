import mongoose from "mongoose";
import User from "../models/userModel.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

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

const testUsers = [
  {
    username: "firefly42",
    hashedPassword: "serenity",
  },
  {
    username: "cryptoNinja",
    hashedPassword: "blockchain123",
  },
  {
    username: "musicMaestro",
    hashedPassword: "melodyMagic",
  },
  {
    username: "gamerGalaxy",
    hashedPassword: "gameOn456",
  },
  {
    username: "artisticSoul",
    hashedPassword: "paintingColors",
  },
];

// promise != string?
async function hashPassword(password) {
  let hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  return hashedPassword;
}
// Seed the database with starter data
async function seedData() {
  try {
    // First, clear the database of existing modules
    await User.deleteMany({});

    // Insert starter modules
    await User.insertMany(testUsers);

    console.log("Database seeded!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
