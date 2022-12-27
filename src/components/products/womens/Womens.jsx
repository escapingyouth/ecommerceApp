import { SwiperSlide } from 'swiper/react';

import { womens } from '../../../product-data/product-data';

import ProductsSlider from '../ProductsSlider';
import ProductCard from '../../product-card/ProductCard';

const Womens = () => {
	const renderedwomens = womens.map((product) => (
		<SwiperSlide key={product.id}>
			<ProductCard product={product} />
		</SwiperSlide>
	));
	return (
		<>
			<ProductsSlider>{renderedwomens}</ProductsSlider>
		</>
	);
};

export default Womens;
