import { useGetProductsByCategoryQuery } from '../../../features/api/apiSlice';
import ProductCard from '../ProductCard';
import { Product } from '../../../types/types';
import { Slider, SwiperProps, SwiperSlide } from '../../common/Slider';
import { Icon, Divider, Spinner } from '@chakra-ui/react';

import { IconType } from 'react-icons/lib';
import LoadingSpinner from '../../common/LoadingSpinner';

interface ProductSliderProps {
  categoryType: string;
  icon: IconType;
  title: string;
}

const ProductSlider = ({ categoryType, icon, title }: ProductSliderProps) => {
  const { data: products, isLoading } =
    useGetProductsByCategoryQuery(categoryType);

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
        {isLoading ? (
          <LoadingSpinner />
        ) : (
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
        )}
      </div>

      <Divider orientation="horizontal" />
    </div>
  );
};

export default ProductSlider;
