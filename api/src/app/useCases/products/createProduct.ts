import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const { imagePath } = req.file;
    const { name, description, ingredients, price } = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath, 
      ingredients,
      price
    });

    return res.status(201).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error by create product' });
  }
}