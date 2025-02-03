import express from "express";
import { connectDB } from "./config/db.config.js";
import cors from "cors";
import dotenv from "dotenv";
import bookRouter from "./routers/book.router.js";
import orderRouter from "./routers/order.router.js";
import userRoute from "./routers/user.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6001;

//middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

//routers
app.use("/api/book", bookRouter);
app.use("/api/order", orderRouter);
app.use("/api/auth", userRoute);

app.listen(PORT, async () => {
  console.log(`Server is running on port : ${PORT}`);
  await connectDB();
});
