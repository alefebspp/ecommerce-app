import { useGetProductsQuery } from '../../../features/api/apiSlice';
import '../../../styles/css/Products.css';
import ProductCard from '../ProductCard';
const MyProducts = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <div className="userProducts">
      {products?.map(product => (
        <ProductCard
          key={product._id}
          firstDivClassName="productCard"
          secondDivClassName="productCard__div"
          product={product}
          imageSize="200px"
        />
      ))}
    </div>
  );
};

export default MyProducts;
