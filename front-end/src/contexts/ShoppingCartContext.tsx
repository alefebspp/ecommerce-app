import { createContext, ReactNode, useState } from 'react';
import { Product, ShoppingCartContextType } from '../types/types';

const initialValue = {
  cartProduct: undefined,
  setCartProduct: () => {}
};

export const ShoppingCartContext =
  createContext<ShoppingCartContextType>(initialValue);

const ShoppingCartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartProduct, setCartProduct] = useState<Product | undefined>();

  return (
    <ShoppingCartContext.Provider
      value={{
        cartProduct,
        setCartProduct
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
