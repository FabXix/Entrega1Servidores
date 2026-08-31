import express from "express";
import bookRoutes from "./routes/book.routes.js";
import { logger } from "./middlewaree/logger.middleware.js";
import { errorHandler } from "./middlewaree/error.middleware.js";

const app = express();

app.use(express.json());
app.use(logger);
app.use("/api/books", bookRoutes);
app.use(errorHandler);

export default app;
