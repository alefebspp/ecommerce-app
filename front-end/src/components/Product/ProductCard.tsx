import { Image } from '@chakra-ui/react';
import { Product } from '../../types/types';

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
  return (
    <div className={firstDivClassName}>
      <Image src={product.image} boxSize={imageSize} borderTopRadius="1rem" />
      <div className={secondDivClassName}>
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
