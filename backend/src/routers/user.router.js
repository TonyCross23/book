import express from "express";
import { userCreate } from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.post("/admin", userCreate);

export default userRoute;
