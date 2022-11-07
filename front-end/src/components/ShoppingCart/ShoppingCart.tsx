import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { Image } from '@chakra-ui/react';
import { useState } from 'react';
import '../../styles/css/Products.css';

const ShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [counter, setCounter] = useState<number>(1);
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
                <div className="order__amount">
                  <p>
                    <strong>R${order.price},00</strong>
                  </p>
                  <div className="counter">
                    <div className="counter__button">-</div>
                    <div>{counter}</div>
                    <div className="counter__button">+</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
