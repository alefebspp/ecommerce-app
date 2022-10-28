import { useGetTodosQuery } from '../features/api/apiSlice';
import { Product } from '../types/TodoTypes';
import { Image } from '@chakra-ui/react';
import './Products.css';
const Products = () => {
  const { data: products } = useGetTodosQuery();

  return (
    <div className="products">
      {products?.map((product: Product) => (
        <div className="product" key={product._id}>
          <Image src={product.image} boxSize="160px" borderTopRadius="1rem" />
          <div className="product__div">
            <p className="product__title">{product.name.substring(0, 30)}...</p>
            <h1>
              <strong>R${product.price},00</strong>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
