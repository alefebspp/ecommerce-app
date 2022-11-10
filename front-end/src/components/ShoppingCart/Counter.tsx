import { Product } from '../../types/types';
import { useDispatch } from 'react-redux';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import { removeProduct } from '../../features/shoppinCart/cartSlice';
import { useEffect, useState } from 'react';

interface CounterProps {
  productPrice: Product | undefined;
}

const Counter = ({ productPrice }: CounterProps) => {
  const [counter, setCounter] = useState<number>(1);
  const [productValue, setProductValue] = useState(productPrice?.price);
  const dispatch = useDispatch();
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const handleRemoveProduct = (orderId: string | undefined) => {
    dispatch(removeProduct(orderId));
  };

  useEffect(() => {
    if (productPrice?.price) setProductValue(counter * productPrice?.price);
  }, [counter]);

  return (
    <div className="order__amount">
      <p>
        <strong>R${productValue},00</strong>
      </p>
      <div className="counter">
        {counter == 1 ? (
          <Icon
            onClick={() => handleRemoveProduct(productPrice?._id)}
            boxSize={4}
            as={FaTrashAlt}
            color="red"
          />
        ) : (
          <Icon
            onClick={decrementCounter}
            boxSize={4}
            as={FaMinus}
            color="#036666"
          />
        )}

        <div>{counter}</div>
        <Icon
          onClick={incrementCounter}
          boxSize={4}
          as={FaPlus}
          color="#036666"
        />
      </div>
    </div>
  );
};

export default Counter;
