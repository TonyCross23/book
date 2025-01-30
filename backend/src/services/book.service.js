import Book from "../models/book.model.js";

export const createBook = async (data) => {
  return await Book.create(data);
};
