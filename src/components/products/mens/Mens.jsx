import { SwiperSlide } from 'swiper/react';

import { mens } from '../../../product-data/product-data';

import ProductsSlider from '../ProductsSlider';
import ProductCard from '../../product-card/ProductCard';

const Mens = () => {
	const renderedMens = mens.map((product) => (
		<SwiperSlide key={product.id}>
			<ProductCard product={product} />
		</SwiperSlide>
	));
	return (
		<>
			<ProductsSlider>{renderedMens}</ProductsSlider>
		</>
	);
};

export default Mens;
