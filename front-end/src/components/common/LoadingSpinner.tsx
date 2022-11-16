import { Spinner } from '@chakra-ui/react';

const LoadingSpinner = () => {
  return (
    <div className="productSlider__spinner">
      <Spinner size="lg" thickness="2px" speed="0.65s" emptyColor="gray.200" />
      <p>Carregando...</p>
    </div>
  );
};

export default LoadingSpinner;
