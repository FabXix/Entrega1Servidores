import type { Book } from "../types/book.js";

const books: Book[] = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008
  },
  {
    id: 2,
    title: "Design Patterns",
    author: "Erich Gamma",
    year: 1994
  },
];

export function findAll(filters?: { title?: string; author?: string; year?: number }): Book[] {
  let result = books;


  if(filters?.title) {
    const titleFilter = filters.title.toLowerCase().trim();
    result = result.filter(book => book.title.toLowerCase().includes(titleFilter));
  }
  
  if (filters?.author) {
    const authorFilter = filters.author.toLowerCase().trim();
    result = result.filter(book => book.author.toLowerCase().includes(authorFilter));
  }

  if (filters?.year && !isNaN(filters.year)) {
    result = result.filter(book => book.year === filters.year);
  }

  return result;
}

export function findById(id: number): Book | undefined {
  return books.find((book) => book.id === id);
}

export function create(book: Book): Book {
  books.push(book);
  return book;
}

export function remove(id: number): boolean {
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    return true;
  }
  return false;
}

export function update(id: number, updatedBook: Book): Book | undefined {
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = { ...updatedBook, id };
    return books[index];
  }
  return undefined;
}