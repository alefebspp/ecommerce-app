import { Schema, model } from 'mongoose';

interface IProduct {
  name: String;
  price: Number;
  image: String;
  category: String;
  description: String;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: false },
  category: { type: String, required: true }
});

export const Product = model<IProduct>('Product', productSchema);
