import type { Request, Response } from "express";
import { getBooks, getBookById, deleteBook, addBook, patchBook } from "../services/book.service.js";
import { sendSuccess, sendCreated, sendNotFound } from "../utils/response.js";

export function getAllBooks(req: Request, res: Response, next: any) {
  try {
    const { title, author, year } = req.query;
    const filters: { title?: string; author?: string; year?: number } = {};

    if (title) {
      filters.title = String(title).trim();
    }
    if (author) {
      filters.author = String(author).trim();
    }
    if (year) {
      const yearNum = Number(year);
      if (!isNaN(yearNum)) {
        filters.year = yearNum;
      }
    }

    return sendSuccess(res, getBooks(filters));
  } catch (error) {
    next(error);
  }
}
export function getBook(req: Request, res: Response) {
  const id = Number(req.params.id);
  const book = getBookById(id);
  return book ? sendSuccess(res, book) : sendNotFound(res, "Book not found");
}


export function createBook(req: Request, res: Response, next: any) {
  try {
    const book = req.body;
    const newBook = addBook(book);
    return sendCreated(res, newBook);
  } catch (error) {
    next(error);
  }
}

export function updateBook(req: Request, res: Response, next: any) {
  try {
    const id = Number(req.params.id);
    const updatedBook = req.body;
    const book = patchBook(id, updatedBook);
    return book ? sendSuccess(res, book) : sendNotFound(res, "Book not found");
  } catch (error) {
    next(error);
  }
}

export function removeBook(req: Request, res: Response) {
  const id = Number(req.params.id);
  const deleted = deleteBook(id);
  return deleted ? sendSuccess(res, { message: "Book deleted successfully" }, 204) : sendNotFound(res, "Book not found");
}
