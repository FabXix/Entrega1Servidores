import type { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 400;
  const message = err.message || "Internal Server Error";
  
  console.error(`[Error] ${message}`);
  
  return res.status(statusCode).json({ 
    message,
    error: process.env.NODE_ENV === "development" ? err.stack : undefined 
  });
};
