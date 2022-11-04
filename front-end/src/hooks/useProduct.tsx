import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import axios from 'axios';
import { useEffect } from 'react';
import { usePostProductMutation } from '../features/api/apiSlice';
import { Product } from '../types/types';
import { useNavigate } from 'react-router-dom';
const useProduct = () => {
  const {
    selectedImage,
    setSelectedImage,
    image,
    setImage,
    createProduct,
    setCreateProduct
  } = useContext(ProductContext);
  const [postProduct] = usePostProductMutation();

  const navigate = useNavigate();

  function imageUpload() {
    const formData = new FormData();
    if (selectedImage) formData.append('file', selectedImage);
    formData.append('upload_preset', 'gkfohtue');

    axios
      .post('https://api.cloudinary.com/v1_1/ddjyksu33/image/upload', formData)
      .then(response => setImage(response.data.url));
  }

  useEffect(() => {
    if (selectedImage !== undefined) imageUpload();
  }, [selectedImage]);

  useEffect(() => {
    if (createProduct !== null) handleCreateProduct(createProduct);
  }, [createProduct]);

  function handleCreateProduct(product: Product) {
    postProduct(product);
    setCreateProduct(null);
    setSelectedImage(undefined);
    navigate('/');
  }

  function handleSetCreateProduct(
    name: string,
    price: number | undefined,
    category: string,
    description: string
  ) {
    setCreateProduct({
      name: name,
      price: price,
      category: category,
      image: image,
      description: description
    });
  }

  return {
    handleSetCreateProduct
  };
};

export default useProduct;
