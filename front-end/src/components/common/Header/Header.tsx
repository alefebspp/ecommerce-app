import '../../../styles/css/Header.css';
import NavigationButton from './NavigationButton';
import { Icon, Button } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBolt } from 'react-icons/fa';
const Header = () => {
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
              <Icon as={FaShoppingCart} color="white" />
              <NavigationButton />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
