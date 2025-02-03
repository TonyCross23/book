import express from "express";
import {
  bookCreate,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "../controllers/book.controller.js";
import verifyAdminToken from "../middleware/verifyAdminToken.js";

const bookRouter = express.Router();

bookRouter.post("/", verifyAdminToken, bookCreate);
bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookById);
bookRouter.put("/:id", verifyAdminToken, updateBook);
bookRouter.delete("/:id", verifyAdminToken, deleteBook);

export default bookRouter;
