import { Image } from '@chakra-ui/react';
import { Product } from '../../types/types';
import Counter from './Counter';

const ShoppingOrder = ({
  order,
  orderClassName
}: {
  order: Product;
  orderClassName: string;
}) => {
  return (
    <div className={orderClassName}>
      <div className="order__info">
        <Image boxSize="80px" src={order.image} />
        <h1 className="order__info__title">{order.name}</h1>
      </div>
      <Counter productPrice={order.price} />
    </div>
  );
};

export default ShoppingOrder;
