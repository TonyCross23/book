import express from "express";
import {
  createOrder,
  getOrderByEmail,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/:email", getOrderByEmail);

export default orderRouter;
