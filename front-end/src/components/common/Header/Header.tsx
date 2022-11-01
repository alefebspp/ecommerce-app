import '../../../styles/css/Header.css';
import NavigationButton from './NavigationButton';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="header__ul">
          <li>
            <h1>HEADER</h1>
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
