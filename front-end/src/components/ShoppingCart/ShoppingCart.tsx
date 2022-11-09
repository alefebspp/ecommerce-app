import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import '../../styles/css/Products.css';
import ShoppingOrder from './ShoppingOrder';

const ShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div>
      <div className="shoppingCart">
        <div className="orders">
          {cart?.map(order => {
            return cart.indexOf(order) % 2 == 0 ? (
              <ShoppingOrder
                priceClassName={'order__price'}
                orderClassName={'order'}
                order={order}
              />
            ) : (
              <ShoppingOrder
                priceClassName={'order__price'}
                orderClassName={'order__dark'}
                order={order}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
