import Order from "../models/order.model.js";

export const orderCreate = async (data) => {
  return await Order.create(data);
};

export const orderGetByEmail = async (email) => {
  return await Order.find({ email }).sort({ createdAt: -1 });
};
