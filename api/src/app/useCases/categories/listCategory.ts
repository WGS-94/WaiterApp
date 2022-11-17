import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function listCategory(req: Request, res: Response) {
  try {
    
    const categories = await Category.find();

    return res.status(201).json(categories);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error by create category' });
  }
}