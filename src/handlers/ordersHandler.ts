import Order from '../models/ordersModel';
import { Response, Request, NextFunction as nf } from 'express';

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

export const addProductToOrder = async (
  req: Request,
  res: Response,
  next: nf,
) => {
  try {
    let flag = false;
    const id = req.params.id;
    const { productId, quantity } = req.body;
    const oldOrder = await Order.findOne({ _id: id });
    const oldProducts = oldOrder?.products || [];
    const final: any = oldProducts.map((obj) => {
      if (obj?.productId == productId) {
        flag = true;
        return { productId, quantity: Number(obj.quantity) + 1 };
      } else {
        return obj;
      }
    });
    const newOrder = await Order.findOneAndUpdate(
      { _id: id },
      {
        products: flag ? [...final] : [...oldProducts, { productId, quantity }],
      },
      { new: true },
    );

    res.status(201).json(newOrder);
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
      { new: true },
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
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};
