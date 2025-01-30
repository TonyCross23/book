import express from "express";
import { bookCreate } from "../controllers/book.controller.js";

const bookRouter = express.Router();

bookRouter.post("/", bookCreate);

export default bookRouter;
