import { Image } from '@chakra-ui/react';
import { Product } from '../../types/types';

interface ProductCardProps {
  product: Product;
  imageSize: string;
}

const ProductCard = ({ product, imageSize }: ProductCardProps) => {
  return (
    <div className="productCard">
      <Image src={product.image} boxSize={imageSize} borderTopRadius="1rem" />
      <div className="productCard__div">
        <p className="productCard__div__p">
          {product.name.substring(0, 30)}...
        </p>
        <h1>
          <strong>R${product.price},00</strong>
        </h1>
      </div>
    </div>
  );
};

export default ProductCard;
