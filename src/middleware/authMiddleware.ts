import { Response, Request, NextFunction as NF } from 'express';
import { verifyToken } from '../utils/verifyToken';

export const authMiddleware = (req: Request, res: Response, next: NF) => {
  const isValid: any = verifyToken(req.headers['authorization']);
  if (isValid) return next();
  res.status(401);
  res.json({ error: ' Unauthorized' });
};
