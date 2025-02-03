import User from "../models/user.model.js";

export const createUser = async (username) => {
  return await User.findOne({ username });
};
