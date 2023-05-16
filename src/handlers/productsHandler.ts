import Product from "../models/products.model";
import mongoose from "mongoose";
import { Response, Request } from "express";
const ObjectId = mongoose.Types.ObjectId;



export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.status(201).json(products);
};

export const getOneProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  if (!ObjectId.isValid(productId)) {
    return res.status(400).json({ error: "Invalid productId" });
  }
  try {
    const updatedProduct = await Product.findOne({ _id: productId });
    if (!updatedProduct) {
      console.log("Product not found");
      return;
    }
    res.status(201).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

export const InsertProduct = async (req: Request, res: Response) => {
  const { title, description, price } = req.body;
  const product = new Product({ title, description, price });
  await product.save();
  res.status(201).json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { title, description, price } = req.body;
    const product = await Product.findOneAndUpdate(
      { _id: id },
      { title, description, price },
      { new: true }
    );
    if (!product) {
      console.log("Product not found");
      return;
    }
    res.status(201).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await Product.deleteOne({ _id: id });
    if (!product) {
      console.log("Product not found");
      return;
    }
    console.log(product.deletedCount);
    res.status(201).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
  }
};
