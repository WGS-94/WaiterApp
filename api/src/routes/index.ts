import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import { createCategory } from '../app/useCases/categories/createCategory';
import { listCategory } from '../app/useCases/categories/listCategory';
import { createProduct } from '../app/useCases/products/createProduct';
import { listProduct } from '../app/useCases/products/listProduct';

export const routes = Router();

const upload = multer(uploadConfig);

// Create Categories
routes.post('/categories', createCategory);

// List Categories
routes.get('/categories', listCategory);

// Create Product
routes.post('/products', upload.single('file'), createProduct);

// List Products
routes.get('/products', listProduct);

// // Get Products by Category
// routes.get('/products/:categoryID/categories', ProductController);

// // Create Order
// routes.post('/orders', OrderController);

// // Change Order Status
// routes.patch('/orders/:orderID', OrderController);

// // DeleteCancel Order
// routes.delete('/orders', OrderController);