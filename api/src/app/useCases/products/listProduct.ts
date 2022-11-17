import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProduct(req: Request, res: Response) {
  try {

    const products = await Product.find();

    return res.status(201).json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error by get all products' });
  }
}