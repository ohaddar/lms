import { Request, Response, NextFunction } from "express";
import { CustomError } from "@/types";

export const errorHandler = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error(`[Error] ${statusCode} - ${message}`);
  console.error(err.stack);

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

export const notFoundHandler = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error: CustomError = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};
