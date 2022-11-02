import { createContext, ReactNode, useState } from 'react';
import { ProductContextType, Product } from '../types/types';

const initialValue = {
  createProduct: null,
  setCreateProduct: () => {},
  selectedImage: undefined,
  setSelectedImage: () => {},
  image: '',
  setImage: () => {},
  product: undefined,
  setProduct: () => {}
};

export const ProductContext = createContext<ProductContextType>(initialValue);

const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const [createProduct, setCreateProduct] = useState<Product | null>(
    initialValue.createProduct
  );
  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    initialValue.selectedImage
  );
  const [image, setImage] = useState<string>(initialValue.image);
  const [product, setProduct] = useState<Product | undefined>(
    initialValue.product
  );
  return (
    <ProductContext.Provider
      value={{
        createProduct,
        setCreateProduct,
        selectedImage,
        setSelectedImage,
        image,
        setImage,
        product,
        setProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
