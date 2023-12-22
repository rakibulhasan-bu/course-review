/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { TErrorSources } from "../interface/error.interface";
import handleZodError from "../error/handleZodError";
import handleValidationError from "../error/handleValidationError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err?.statusCode || 500;
  let message = err?.message || "Something went wrong!";
  let errorSources: TErrorSources[] = [
    {
      path: "",
      message: "Something went wrong!",
    },
  ];

  if (err instanceof ZodError) {
    const simpleError = handleZodError(err);
    statusCode = simpleError.statusCode;
    message = simpleError.message;
    errorSources = simpleError.errorSources;
  } else if (err?.name === "ValidationError") {
    const simpleError = handleValidationError(err);
    statusCode = simpleError.statusCode;
    message = simpleError.message;
    errorSources = simpleError.errorSources;
  }
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: err?.stack,
    err,
  });
};

export default globalErrorHandler;
