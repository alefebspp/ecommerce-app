import ProductSlider from './Product/Product/ProductSlider';
import { FaMobileAlt, FaTshirt } from 'react-icons/fa';
import '../styles/css/Products.css';
const Products = () => {
  return (
    <>
      <ProductSlider
        categoryType="smartphones"
        icon={FaMobileAlt}
        title="Smartphones"
      />
      <ProductSlider categoryType="moda" icon={FaTshirt} title="Moda" />
    </>
  );
};

export default Products;
