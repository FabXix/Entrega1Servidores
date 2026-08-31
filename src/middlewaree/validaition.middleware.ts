import type { Request, Response, NextFunction } from "express";

export const validateBook = (req: Request, res: Response, next: NextFunction) => {
  const { title, author, year } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  if (typeof title === "string" && title.trim() === "") {
    return res.status(400).json({ message: "Title cannot be composed only of spaces" });
  }
  if (!author) {
    return res.status(400).json({ message: "Author is required" });
  }
  if (year === undefined || year === null) {
    return res.status(400).json({ message: "Year is required" });
  }

  if (typeof year !== "number" || !Number.isInteger(year)) {
    return res.status(400).json({ message: "Year must be a valid number" });
  }

  next();
}