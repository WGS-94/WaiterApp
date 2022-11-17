import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';
import mongoose from 'mongoose';
import path from 'path';

mongoose.connect('mongodb+srv://teste:teste@omnisatk.tqzfo.mongodb.net/waiterApp?retryWrites=true&w=majority')
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(routes);
    app.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    dotenv.config();
    
    app.listen(process.env.PORT || 3001, () => {
      console.log('🚀 Server started on port 3001!');
    });
    console.log('🚀 Connected to DB...');
  })
  .catch(() => console.log('🚀 Error to connect...'));



