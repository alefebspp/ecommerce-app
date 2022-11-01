import { useGetProductsQuery } from '../../../features/api/apiSlice';
import { Image, Button } from '@chakra-ui/react';
import '../../Products.css';
import ProductCard from '../ProductCard';
const MyProducts = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <div className="userProducts">
      {products?.map(product => (
        <ProductCard product={product} imageSize="200px" />
      ))}
    </div>
  );
};

export default MyProducts;
