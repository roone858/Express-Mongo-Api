import Moderator from "../models/moderatorsModel";
import { generateToken } from "../utils/generateToken";
import { verifyToken } from "../utils/verifyToken";
import { InsertModerator } from "./moderatorsHandler";
import { Response, Request, NextFunction as NF } from "express";

export const signIn = async (req: Request, res: Response, next: NF) => {
  const { username, password } = req.body;

  const mod = await Moderator.findOne({ username: username });

  if (!mod) return res.json({ message: "Username not Found" });

  if (password !== mod.password)
    res.json({ message: "Password is  incorrect" });

  const token = generateToken(username);

  res.json({ token: token, user: mod.username });
};

export const signUp = InsertModerator;
