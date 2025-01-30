import {
  bookUpdate,
  createBook,
  deleteBookById,
  getBook,
  getBooks,
} from "../services/book.service.js";

export const bookCreate = async (req, res) => {
  try {
    const book = await createBook(req.body);
    res.status(201).json({
      message: "Book created succefull",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      status: "Something went wrong!",
      message: error.message,
    });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await getBooks();
    res.status(200).json({
      message: "Succefull",
      books,
    });
  } catch (error) {
    res.status(500).json({
      status: "Something went wrong!",
      message: error.message,
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await getBook(req.params.id);
    res.status(200).json({
      message: "succefull",
      book,
    });
  } catch (error) {
    res.status(500).json({
      status: "Something went wrong!",
      message: error.message,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await bookUpdate(req.params.id, req.body);
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.status(200).json({
      message: "Book updated succefull",
      book,
    });
  } catch (error) {
    res.status(500).json({
      status: "Something went wrong!",
      message: error.message,
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await deleteBookById(req.params.id);
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.status(200).json({
      message: "Deleted book succefull",
    });
  } catch (error) {
    res.status(500).json({
      status: "Something went wrong!",
      message: error.message,
    });
  }
};
