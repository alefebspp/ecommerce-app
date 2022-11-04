import { Request, Response } from 'express';
import { Product } from '../model/Product';

export default {
  async index(req: Request, res: Response) {
    try {
      const product = await Product.find();
      res.status(201).json(product);
    } catch (error) {
      res.status(401).json(error);
    }
  },
  async createProduct(req: Request, res: Response) {
    const { name, price, image, category, description } = req.body;
    const product = new Product({
      name: name,
      price: price,
      category: category,
      image: image,
      description: description
    });
    try {
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(401).json(error);
    }
  },
  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id });

    try {
      if (!product) res.status(401).json('Produto não encontrado!');
      else {
        const deletedProduct = await Product.deleteOne({ _id: id });
        res.status(201).json(deletedProduct);
      }
    } catch (error) {
      res.status(401).json(error);
    }
  },
  async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { name, price, category, image, description } = req.body;
    const data = {
      name: name,
      price: price,
      category: category,
      image: image,
      description: description
    };
    const product = await Product.findOne({ _id: id });
    try {
      if (!product) res.status(401).json('Produto não encontrado!');
      else {
        const updatedProduct = await Product.updateOne({ _id: id }, data);
        res.status(201).json(updatedProduct);
      }
    } catch (error) {
      res.status(401).json(error);
    }
  },
  async getProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await Product.findOne({ _id: id });
      if (!product) {
        res.status(401).json('Produto não encontrado!');
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(401).json(error);
    }
  }
};
