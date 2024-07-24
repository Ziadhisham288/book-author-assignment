import { Router } from "express";
import { createAuthor, deleteAuthor, getAuthorById, getAuthors, updateAuthor } from "./authors.controller.js";

const authorRouter = Router()

authorRouter.post("/" , createAuthor)
authorRouter.get("/" , getAuthors)
authorRouter.get("/:id" , getAuthorById)
authorRouter.patch("/:id" , updateAuthor)
authorRouter.delete("/:id" , deleteAuthor)



export default authorRouter;