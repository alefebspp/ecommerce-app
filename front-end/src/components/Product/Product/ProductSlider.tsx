import { useGetProductsByCategoryQuery } from '../../../features/api/apiSlice';
import ProductCard from '../ProductCard';
import { Product } from '../../../types/types';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { Icon, Divider } from '@chakra-ui/react';
import Slider from '../../common/Slider/Slider';
import { IconType } from 'react-icons/lib';

interface ProductSliderProps {
  categoryType: string;
  icon: IconType;
  title: string;
}

const ProductSlider = ({ categoryType, icon, title }: ProductSliderProps) => {
  const { data: products } = useGetProductsByCategoryQuery(categoryType);

  const settings: SwiperProps = {
    spaceBetween: 30,
    slidesPerView: 2
  };
  return (
    <div className="productSlider">
      <div className="productSlider__titleGroup">
        <Icon boxSize={6} as={icon} color="#036666" />
        <h1 className="productSlider__title">{title}</h1>
      </div>
      <div>
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
      </div>
      <Divider orientation="horizontal" />
    </div>
  );
};

export default ProductSlider;
