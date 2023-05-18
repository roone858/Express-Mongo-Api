import { Response, Request, NextFunction as NF } from "express";
export const errorHandling = (
  err: Error,
  req: Request,
  res: Response,
  next: NF
) => {
  console.error(err);

  res.status(500);
  res.json({ error: "Internal Server Error" });
};
