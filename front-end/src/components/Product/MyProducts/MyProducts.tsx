import { useGetProductsQuery } from '../../../features/api/apiSlice';
import { Image, Button } from '@chakra-ui/react';
import '../../Products.css';
const MyProducts = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <div className="userProducts">
      {products?.map(product => (
        <div className="userProducts__div">
          <Image src={product.image} boxSize="200px" borderTopRadius="1rem" />
          <div className="userProducts__div2">
            <p className="userProducts__div2__p">
              {product.name.substring(0, 30)}
            </p>
            <h1 className="userProducts__div2__h1">R${product.price},00</h1>
            <Button size="xs" backgroundColor="#565264" color="gray.300">
              Acessar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
