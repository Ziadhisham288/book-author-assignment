import { Router } from "express";
import { createBook, deleteBook, getBookById, getBooks, updateBook } from "./books.controller.js";


const bookRouter = Router()

bookRouter.post("/", createBook )
bookRouter.get("/", getBooks )
bookRouter.get("/:id", getBookById )
bookRouter.patch("/:id", updateBook )
bookRouter.delete("/:id", deleteBook)

export default bookRouter;
