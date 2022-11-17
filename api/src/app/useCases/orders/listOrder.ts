import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrder(req: Request, res: Response) {
  try {

    const order = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');

    return res.status(201).json(order);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error by create order' });
  }
}