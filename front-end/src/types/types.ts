export type Product = {
  name: string;
  price: number;
  category: string;
  image: string;
};

export type ProductContextType = {
  createProduct: Product | null;
  setCreateProduct: (product: Product) => void;
  selectedImage: File | undefined;
  setSelectedImage: (image: File | undefined) => void;
  image: File | undefined;
  setImage: (image: File | undefined) => void;
};
