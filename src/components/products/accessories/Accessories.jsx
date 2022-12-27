import { SwiperSlide } from 'swiper/react';

import { accessories } from '../../../product-data/product-data';

import ProductsSlider from '../ProductsSlider';
import ProductCard from '../../product-card/ProductCard';

const Accessories = () => {
	const renderedAccessories = accessories.map((product) => (
		<SwiperSlide key={product.id}>
			<ProductCard product={product} />
		</SwiperSlide>
	));
	return (
		<>
			<ProductsSlider>{renderedAccessories}</ProductsSlider>
		</>
	);
};

export default Accessories;
