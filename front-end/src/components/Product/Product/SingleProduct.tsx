import { useContext } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import { Image, Button, Icon } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../features/shoppinCart/cartSlice';
import { FaShoppingCart, FaDollarSign } from 'react-icons/fa';
import '../../../styles/css/Products.css';
import { RootState } from '../../../features/store';
const SingleProduct = () => {
  const { product } = useContext(ProductContext);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart?.cart);
  function teste() {
    console.log(cart);
  }
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
        <h2 className="singleProduct__description">{product?.description}</h2>
        <p className="singleProduct__price">R${product?.price},00</p>
      </div>
      <div className="singleProduct__buttons">
        <Button
          onClick={() =>
            dispatch(
              addProduct({
                _id: product?._id,
                name: product?.name,
                price: product?.price,
                image: product?.image
              })
            )
          }
          color="white"
          leftIcon={<Icon as={FaShoppingCart} color="white" />}
          backgroundColor="#036666"
        >
          Adicionar ao carrinho
        </Button>
        <Button
          onClick={teste}
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
