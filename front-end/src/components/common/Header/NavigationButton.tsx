import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
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
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
        <MenuItem onClick={() => navigate('/create-product')}>
          Create Product
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavigationButton;
