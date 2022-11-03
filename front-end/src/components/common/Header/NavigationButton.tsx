import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
const NavigationButton = () => {
  const navigate = useNavigate();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon color="white" />}
        variant="ghost"
      />
      <MenuList>
        <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
        <MenuItem onClick={() => navigate('/create-product')}>
          Create Product
        </MenuItem>
        <MenuItem onClick={() => navigate('/user-products')}>
          My Products
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavigationButton;
