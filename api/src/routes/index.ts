import { Router } from 'express';

import CategoryController from '../app/controllers/CategoryController';
import ProductController from '../app/controllers/ProductController';
import OrderController from '../app/controllers/OrderController';

export const routes = Router();

// Create Categories
routes.post('/categories', CategoryController);

// List Categories
routes.get('/categories', CategoryController);

// Create Product
routes.post('/products', ProductController);

// List Products
routes.get('/products', ProductController);

// Get Products by Category
routes.get('/products/:categoryId/categories', ProductController);

// Create Order
routes.post('/orders', OrderController);

// Change Order Status
routes.get('/orders', OrderController);

// DeleteCancel Order
routes.delete('/orders', OrderController);