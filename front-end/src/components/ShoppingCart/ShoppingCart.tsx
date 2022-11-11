import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import '../../styles/css/Products.css';
import { FaRegFrown } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import ShoppingOrder from './ShoppingOrder';
import SectionsTitle from '../common/Sections/SectionsTitle';

const ShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const cartTotal = useSelector((state: RootState) => state.cart.cartTotal);
  const emptyCart = cart.length == 0;

  return (
    <div>
      <div className="shoppingCart">
        <div className="orders">
          {emptyCart ? (
            <SectionsTitle icon={FaRegFrown} title="Carrinho vazio" />
          ) : (
            cart?.map(order => {
              return (
                <div>
                  {cart.indexOf(order) % 2 == 0 ? (
                    <ShoppingOrder orderClassName={'order'} order={order} />
                  ) : (
                    <ShoppingOrder
                      orderClassName={'order__dark'}
                      order={order}
                    />
                  )}
                </div>
              );
            })
          )}
          {emptyCart ? (
            ''
          ) : (
            <div>
              <h1>Total: R${cartTotal},00</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
