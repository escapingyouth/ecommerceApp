import { SwiperSlide } from 'swiper/react';

import { mens } from '../../../product-data/product-data';

import ProductSlider from '../ProductSlider';
import ProductCard from '../../product-card/ProductCard';

const Mens = () => {
	const renderedMens = mens.map((product) => (
		<SwiperSlide key={product.id}>
			<ProductCard product={product} />
		</SwiperSlide>
	));
	return (
		<>
			<ProductSlider>{renderedMens}</ProductSlider>
		</>
	);
};

export default Mens;
