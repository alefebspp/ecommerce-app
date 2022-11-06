import { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const useShoppingCart = () => {
  const { cartProduct, setCartProduct } = useContext(ShoppingCartContext);
};

export default useShoppingCart;
