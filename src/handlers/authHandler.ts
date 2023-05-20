import Moderator from '../models/moderatorsModel';
import { compareHash } from '../utils/HashPassword';
import { generateToken } from '../utils/generateToken';
import { InsertModerator } from './moderatorsHandler';
import { Response, Request } from 'express';

export const signIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const mod = await Moderator.findOne({ username: username });
  if (!mod) return res.json({ message: 'Username not Found' });

  const isPasswordCorrect = compareHash(password, mod.password);

  if (!isPasswordCorrect)
    return res.json({ message: 'Password is  incorrect' });

  const token = generateToken(username);

  res.json({ token: token, user: mod.username });
};

export const signUp = InsertModerator;
