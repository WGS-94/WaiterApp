import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {

    const { orderID } = req.params;
    const { status } = req.body;

    if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
      return res.status(400).json({ error: 'Status not found'});  
    }

    await Order.findByIdAndUpdate(orderID, { status });

    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error by update status' });
  }
}