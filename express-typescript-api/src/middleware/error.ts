import {CustomError} from "../lib/custom-error";
import {NextFunction, Request, Response} from "express";

export function error(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const msg = JSON.parse(err.message);
    res.status(err.status).json({msg});
  } catch (error) {
    res.status(err.status).json({msg: err.message});
  }
}