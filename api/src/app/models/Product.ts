import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
  name : {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: [{
      name : {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true,
      }
    }],
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  }
},
{
  timestamps: true
}
// {
//   toJSON: {
//     virtuals: true
//   }
// }
)); 

// Product.virtual('thumbnail_url').get(function(){
//   return `http://localhost:3333/files/${imagePath}`;
// });