import { Router } from 'express';
import ProductController from '../controller/ProductController';
const routes = Router();

routes.get('/product/all', ProductController.index);
routes.post('/product/create', ProductController.createProduct);
routes.delete('/product/delete/:id', ProductController.deleteProduct);
routes.patch('/product/update/:id', ProductController.updateProduct);
export default routes;
