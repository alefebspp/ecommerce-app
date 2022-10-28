import { Routes, Route } from 'react-router-dom';
import CreateProduct from '../components/Product/CreateProduct';
import Main from '../pages/Main/Main';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="create-product" element={<CreateProduct />} />
    </Routes>
  );
};

export default AppRoutes;
