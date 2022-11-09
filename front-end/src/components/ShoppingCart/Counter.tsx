import { useEffect, useState } from 'react';

interface CounterProps {
  productPrice: number | undefined;
  orderPrice: string;
}

const Counter = ({ productPrice, orderPrice }: CounterProps) => {
  const [counter, setCounter] = useState<number>(1);
  const [productValue, setProductValue] = useState(productPrice);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    if (productPrice) setProductValue(counter * productPrice);
  }, [counter]);

  return (
    <div className="order__amount">
      <p className={orderPrice}>
        <strong>R${productValue},00</strong>
      </p>
      <div className="counter">
        <div onClick={decrementCounter} className="counter__button">
          -
        </div>
        <div>{counter}</div>
        <div onClick={incrementCounter} className="counter__button">
          +
        </div>
      </div>
    </div>
  );
};

export default Counter;
