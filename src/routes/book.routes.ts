import { Router } from "express";
import { getAllBooks, getBook, createBook, removeBook, updateBook } from "../controllers/book.controller.js";
import { validateBook } from "../middlewaree/validaition.middleware.js";

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getBook);
router.post("/", validateBook, createBook);
router.delete("/:id", removeBook);
router.patch("/:id", validateBook, updateBook);


export default router;
