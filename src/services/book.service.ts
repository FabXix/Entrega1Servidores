import { findAll, findById, create, remove, update } from "../repositories/book.repository.js";
import type { Book } from "../types/book.js";

export function getBooks(filters?: { author?: string; year?: number }) {
  return findAll(filters);
}
export function getBookById(id: number) {
  return findById(id);
}
export function addBook(book: Book) {
  const newBook = { ...book, id: Date.now() };
  return create(newBook);
}

export function deleteBook(id: number) {
  return remove(id);
}
export function patchBook(id: number, updatedBook: Book) {
  return update(id, updatedBook);
}
