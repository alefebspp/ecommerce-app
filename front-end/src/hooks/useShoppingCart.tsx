import { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';
const useShoppingCart = () => {
  const navigate = useNavigate();
  const { cartProduct, setCartProduct } = useContext(ShoppingCartContext);

  const handleAddProductToCart = () => {};

  return {
    handleAddProductToCart
  };
};

export default useShoppingCart;
