import { useGetProductsQuery } from '../features/api/apiSlice';
import { Product } from '../types/types';
import Slider from './common/Slider/Slider';
import { SwiperSlide, SwiperProps } from 'swiper/react';
import '../styles/css/Products.css';
import ProductCard from './Product/ProductCard';
const Products = () => {
  const { data: products } = useGetProductsQuery();

  const settings: SwiperProps = {
    spaceBetween: 30,
    slidesPerView: 2
  };
  return (
    <Slider settings={settings}>
      {products?.map((product: Product) => (
        <SwiperSlide key={product.name}>
          <ProductCard
            firstDivClassName="product"
            secondDivClassName="product__div"
            product={product}
            imageSize="160px"
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default Products;
