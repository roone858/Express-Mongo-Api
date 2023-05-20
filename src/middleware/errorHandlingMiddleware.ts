import { Response, Request } from 'express';
export const errorHandling = (err: Error, req: Request, res: Response) => {
  console.error(err);

  res.status(500);
  res.json({ error: 'Internal Server Error' });
};
