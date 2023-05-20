import User from '../models/usersModel';
import { Response, Request } from 'express';
import { NextFunction as nf } from 'connect';

export const getAllUsers = async (req: Request, res: Response, next: nf) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const getOneUser = async (req: Request, res: Response, next: nf) => {
  const userId = req.params.id;
  try {
    const updatedUser = await User.findOne({ _id: userId });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const InsertUser = async (req: Request, res: Response, next: nf) => {
  try {
    const { username, email, password, address } = req.body;
    const user = new User({ username, email, password, address });
    await user.save();
    res.status(201).json(user);
  } catch (err: any) {
    next(err);
  }
};

export const updateUser = async (req: Request, res: Response, next: nf) => {
  try {
    const id = req.params.id;
    const { username, email, password, address } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: id },
      { username, email, password, address },
      { new: true },
    );
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req: Request, res: Response, next: nf) => {
  try {
    const id = req.params.id;
    const user = await User.deleteOne({ _id: id });
    if (!user) {
      console.log('User not found');
      return;
    }
    res.status(204).json(user);
  } catch (err) {
    next(err);
  }
};
