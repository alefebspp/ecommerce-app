import '../../../styles/css/Header.css';
import NavigationButton from './NavigationButton';
import { Icon } from '@chakra-ui/react';
import { FaBolt } from 'react-icons/fa';
const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="header__ul">
          <li>
            <div className="header__div">
              <Icon boxSize={6} as={FaBolt} color="yellow" />
              <div className="header__div2">
                <h1 className="header__h1">Lightning</h1>
                <h1 className="header__h1">Market</h1>
              </div>
            </div>
          </li>
          <li>
            <NavigationButton />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
