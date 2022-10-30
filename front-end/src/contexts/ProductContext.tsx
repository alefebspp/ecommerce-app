import { createContext, ReactNode, useState } from 'react';
import { ProductContextType, Product } from '../types/types';

const initialValue = {
  createProduct: null,
  setCreateProduct: () => {},
  selectedImage: undefined,
  setSelectedImage: () => {},
  image: undefined,
  setImage: () => {}
};

export const ProductContext = createContext<ProductContextType>(initialValue);

const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const [createProduct, setCreateProduct] = useState<Product | null>(
    initialValue.createProduct
  );
  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    initialValue.selectedImage
  );
  const [image, setImage] = useState<File | undefined>(initialValue.image);
  return (
    <ProductContext.Provider
      value={{
        createProduct,
        setCreateProduct,
        selectedImage,
        setSelectedImage,
        image,
        setImage
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
