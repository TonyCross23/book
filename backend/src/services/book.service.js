import Book from "../models/book.model.js";

export const createBook = async (data) => {
  return await Book.create(data);
};

export const getBooks = async () => {
  return await Book.find();
};

export const getBook = async (id) => {
  return await Book.findById(id);
};

export const bookUpdate = async (id, data) => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBookById = async (id) => {
  return await Book.findByIdAndDelete(id);
};
