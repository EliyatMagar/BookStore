import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from './route/book.route.js';

import userRoute from './route/user.route.js';

import cors from 'cors';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// Set the default port to 4000 if process.env.PORT is not set or is invalid
const PORT = parseInt(process.env.PORT, 10) || 4000;

// Connect to MongoDB
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true, // Fixed typo here
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

app.use('/book', bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
