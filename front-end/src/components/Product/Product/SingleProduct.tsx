import { useContext } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import { Image } from '@chakra-ui/react';
import '../../../styles/css/Products.css';
const SingleProduct = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="singleProduct">
      <div className="singleProduct__div">
        <Image
          boxShadow="0px 0px 6px 0px rgba(0, 0, 0, 0.5)"
          borderRadius="1rem"
          src={product?.image}
          boxSize="200px"
        />
        <p>{product?.name}</p>
        <h1>R${product?.price},00</h1>
      </div>
    </div>
  );
};

export default SingleProduct;
