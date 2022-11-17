import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function calcelOrder(req: Request, res: Response) {
  try {

    const { orderID } = req.params;

    await Order.findByIdAndDelete(orderID);

    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error by cancel order' });
  }
}