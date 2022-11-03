import { useContext } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import { Image, Button, Icon } from '@chakra-ui/react';
import { FaShoppingCart, FaDollarSign } from 'react-icons/fa';
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
        <h1 className="singleProduct__title">{product?.name}</h1>
        <h2 className="singleProduct__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </h2>
        <p className="singleProduct__price">R${product?.price},00</p>
      </div>
      <div className="singleProduct__buttons">
        <Button
          color="white"
          leftIcon={<Icon as={FaShoppingCart} color="white" />}
          backgroundColor="#036666"
        >
          Adicionar ao carrinho
        </Button>
        <Button
          color="white"
          leftIcon={<Icon as={FaDollarSign} color="white" />}
          backgroundColor="#036666"
        >
          Comprar agora
        </Button>
      </div>
    </div>
  );
};

export default SingleProduct;
