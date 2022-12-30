import { SwiperSlide } from 'swiper/react';

import { accessories } from '../../../product-data/product-data';

import ProductSlider from '../ProductSlider';
import ProductCard from '../../product-card/ProductCard';

const Accessories = () => {
	const renderedAccessories = accessories.map((product) => (
		<SwiperSlide key={product.id}>
			<ProductCard product={product} />
		</SwiperSlide>
	));
	return (
		<>
			<ProductSlider>{renderedAccessories}</ProductSlider>
		</>
	);
};

export default Accessories;
