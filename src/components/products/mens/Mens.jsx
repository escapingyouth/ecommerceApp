import { SwiperSlide } from 'swiper/react';

import { mens } from './MensList';
import './mens.scss';

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
