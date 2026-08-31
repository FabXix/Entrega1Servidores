import type { Response } from "express";

export function sendSuccess(res: Response, data: any, statusCode = 200) {
  return res.status(statusCode).json(data);
}

export function sendError(res: Response, message: string, statusCode = 400) {
  return res.status(statusCode).json({ message });
}

export function sendNotFound(res: Response, message = "Not found") {
  return res.status(404).json({ message });
}

export function sendCreated(res: Response, data: any) {
  return res.status(201).json(data);
}
