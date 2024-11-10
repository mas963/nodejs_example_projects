import {NextFunction, Request, Response} from "express";
import {CustomError} from "../lib/custom-error";

export function notFound(req: Request, res: Response, next: NextFunction) {
  return next(new CustomError("Resource Not Found", 404));
}