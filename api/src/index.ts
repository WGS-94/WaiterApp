import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://teste:teste@omnisatk.tqzfo.mongodb.net/waiterApp?retryWrites=true&w=majority')
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(routes);

    dotenv.config();
    
    app.listen(process.env.PORT || 3001, () => {
      console.log('🚀 Server started on port 3001!');
    });
    console.log('🚀 Connected to DB...');
  })
  .catch(() => console.log('🚀 Error to connect...'));



