import mongoose from "mongoose";
import express from "express";
const app = express();
import userRouter from "./routes/userRoutes.js";
import postRouter from "./routes/postRouter.js";
import reviewRouter from "./routes/reviewRouter.js";
import commentRouter from "./routes/commentRouter.js";
import cors from "cors";

const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/api/v1", userRouter);
app.use("/api/v1", postRouter);
app.use("/api/v1", reviewRouter);
app.use("/api/v1", commentRouter);

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
