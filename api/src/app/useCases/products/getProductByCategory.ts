import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function getProductByCategory(req: Request, res: Response) {
  try {

    const { categoryID } = req.params;
    const product = await Product.find().where('category').equals(categoryID);

    return res.status(201).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error by get all products' });
  }
}