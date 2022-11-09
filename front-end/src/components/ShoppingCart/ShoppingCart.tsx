import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { Image } from '@chakra-ui/react';
import Counter from './Counter';
import '../../styles/css/Products.css';

const ShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div>
      <div className="shoppingCart">
        <div className="orders">
          {cart?.map(order => {
            return (
              <div className="order">
                <div className="order__info">
                  <Image boxSize="80px" src={order.image} />
                  <h1 className="order__info__title">{order.name}</h1>
                </div>
                <Counter productPrice={order.price} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
