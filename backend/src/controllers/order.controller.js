import { orderCreate, orderGetByEmail } from "../services/order.service.js";

export const createOrder = async (req, res) => {
  try {
    const order = await orderCreate(req.body);
    res.status(201).json({
      message: "order created succefull",
      order,
    });
  } catch (error) {
    res.status(500).json({
      status: "Something went wrong!",
      message: error.message,
    });
  }
};

export const getOrderByEmail = async (req, res) => {
  try {
    const order = await orderGetByEmail(req.params.email);
    if (!order) {
      return res.status(404).json({
        message: "order not found",
      });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      status: "Something went wrong!",
      message: error.message,
    });
  }
};
