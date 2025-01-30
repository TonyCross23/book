import express from "express";
import { connectDB } from "./config/db.config.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6001;

//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    Credential: true,
  })
);

app.listen(PORT, async () => {
  console.log(`Server is running on port : ${PORT}`);
  await connectDB();
});
