import { NavigationButton, HeaderStyle } from '../Header';
import { Icon } from '@chakra-ui/react';
import { FaShoppingCart, FaBolt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../../features/store';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const conditionalShow = (element: ReactNode) =>
    cart.length > 0 ? element : '';
  return (
    <div className="header">
      <nav>
        <ul className="header__ul">
          <li>
            <div className="header__div">
              <Icon boxSize={5} as={FaBolt} color="yellow" />
              <div className="header__div2">
                <h1 className="header__h1">Lightning</h1>
                <h1 className="header__h1">Market</h1>
              </div>
            </div>
          </li>
          <li>
            <div className="header__div3">
              <div
                onClick={() => navigate('/cart')}
                className="header__div3__cart"
              >
                {conditionalShow(
                  <div className="cart__length">{cart.length}</div>
                )}
                <Icon as={FaShoppingCart} color="white" />
              </div>
              <NavigationButton />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
