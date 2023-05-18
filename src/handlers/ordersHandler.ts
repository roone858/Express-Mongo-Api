import Order from "../models/ordersModel";
import { Response, Request, NextFunction as nf } from "express";

export const getAllOrders = async (req: Request, res: Response, next: nf) => {
  try {
    const orders = await Order.find();
    res.status(201).json(orders);
  } catch (err) {
    next(err);
  }
};

export const getOneOrder = async (req: Request, res: Response, next: nf) => {
  const orderId = req.params.id;
  try {
    const updatedOrder = await Order.findOne({ _id: orderId });
    res.status(201).json(updatedOrder);
  } catch (err) {
    next(err);
  }
};

export const InsertOrder = async (req: Request, res: Response, next: nf) => {
  try {
    const { productId, userId } = req.body;
    const order = new Order({ products: { productId: productId }, userId });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

export const pushToOrder = async (req: Request, res: Response, next: nf) => {
  try {
    const orderId = req.params.id;
    const { productId } = req.body;
    const order = await Order.findOne({ _id: orderId });
    order?.products.push({ productId: productId, quantity: 1 });

    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};
export const updateOrder = async (req: Request, res: Response, next: nf) => {
  try {
    const id = req.params.id;
    const { productId, userId } = req.body;
    const order = await Order.findOneAndUpdate(
      { _id: id },
      { productId, userId },
      { new: true }
    );
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

export const deleteOrder = async (req: Request, res: Response, next: nf) => {
  try {
    const id = req.params.id;
    const order = await Order.deleteOne({ _id: id });
    console.log(order.deletedCount);
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};
