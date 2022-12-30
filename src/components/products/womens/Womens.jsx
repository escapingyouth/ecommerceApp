import { SwiperSlide } from 'swiper/react';

import { womens } from '../../../product-data/product-data';

import ProductSlider from '../ProductSlider';
import ProductCard from '../../product-card/ProductCard';

const Womens = () => {
	const renderedwomens = womens.map((product) => (
		<SwiperSlide key={product.id}>
			<ProductCard product={product} />
		</SwiperSlide>
	));
	return (
		<>
			<ProductSlider>{renderedwomens}</ProductSlider>
		</>
	);
};

export default Womens;
