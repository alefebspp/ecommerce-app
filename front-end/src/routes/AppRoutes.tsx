import { Routes, Route } from 'react-router-dom';
import CreateProduct from '../components/Product/CreateProduct/CreateProduct';
import MyProducts from '../components/Product/MyProducts/MyProducts';
import SingleProduct from '../components/Product/Product/SingleProduct';
import Main from '../pages/Main/Main';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="create-product" element={<CreateProduct />} />
      <Route path="user-products" element={<MyProducts />} />
      <Route path="product" element={<SingleProduct />} />
    </Routes>
  );
};

export default AppRoutes;
