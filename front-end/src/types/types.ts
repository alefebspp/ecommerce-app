export type Product = {
  _id?: string;
  name: string;
  price: number | undefined;
  category: string;
  image: string;
  description: string;
};

export type ProductContextType = {
  createProduct: Product | null;
  setCreateProduct: (product: Product | null) => void;
  selectedImage: File | undefined;
  setSelectedImage: (image: File | undefined) => void;
  image: string;
  setImage: (image: string) => void;
  product: Product | undefined;
  setProduct: (value: Product | undefined) => void;
};
