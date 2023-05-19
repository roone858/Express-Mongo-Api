import Product from "../models/productsModel";
import { Response, Request, NextFunction as nf } from "express";

export const getAllProducts = async (req: Request, res: Response, next: nf) => {
  try {
    const products = await Product.find();
    res.status(201).json(products);
  } catch (err) {
    next(err);
  }
};

export const getOneProduct = async (req: Request, res: Response, next: nf) => {
  const productId = req.params.id;
  try {
    const updatedProduct = await Product.findOne({ _id: productId });
    res.status(201).json(updatedProduct);
  } catch (err) {
    next(err);
  }
};

export const InsertProduct = async (req: Request, res: Response, next: nf) => {
  try {
    const { title, description, price } = req.body;
    const product = new Product({ title, description, price });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req: Request, res: Response, next: nf) => {
  try {
    const id = req.params.id;
    const { title, description, price } = req.body;
    const product = await Product.findOneAndUpdate(
      { _id: id },
      { title, description, price },
      { new: true }
    );
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: nf) => {
  try {
    const id = req.params.id;
    const product = await Product.deleteOne({ _id: id });
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};
