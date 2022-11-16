import { Image } from '@chakra-ui/react';
import { Product } from '../../types/types';
import { useGetProductQuery } from '../../features/api/apiSlice';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  imageSize: string;
  firstDivClassName: string;
  secondDivClassName: string;
}

const ProductCard = ({
  product,
  imageSize,
  firstDivClassName,
  secondDivClassName
}: ProductCardProps) => {
  const { setProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const { data } = useGetProductQuery(product._id);
  function handleGetProduct() {
    setProduct(data);
    navigate('/product');
  }

  return (
    <div onClick={handleGetProduct} className={firstDivClassName}>
      <Image src={product.image} boxSize={imageSize} borderTopRadius="1rem" />
      <div className={secondDivClassName}>
        <p className="productCard__div__p">
          {product.name?.substring(0, 25)}...
        </p>
        <h1>
          <strong>R${product.price},00</strong>
        </h1>
      </div>
    </div>
  );
};

export default ProductCard;
