import { useGetTodosQuery } from '../features/api/apiSlice';
import { Product } from '../types/TodoTypes';
import { Image } from '@chakra-ui/react';
import Slider from './common/Slider/Slider';
import { SwiperSlide, SwiperProps } from 'swiper/react';
import './Products.css';
const Products = () => {
  const { data: products } = useGetTodosQuery();

  const settings: SwiperProps = {
    spaceBetween: 150,
    slidesPerView: 3
  };
  return (
    <Slider settings={settings}>
      {products?.map((product: Product) => (
        <SwiperSlide>
          <div className="product" key={product._id}>
            <Image src={product.image} boxSize="160px" borderTopRadius="1rem" />
            <div className="product__div">
              <p className="product__title">
                {product.name.substring(0, 30)}...
              </p>
              <h1>
                <strong>R${product.price},00</strong>
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default Products;
