import { createBook } from "../services/book.service.js";

export const bookCreate = async (req, res) => {
  try {
    const book = await createBook(req.body);
    res.status(201).json({
      message: "Book created succefull",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something wrong!",
    });
  }
};
