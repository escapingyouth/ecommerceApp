import { SwiperSlide } from 'swiper/react';

import { shoes } from '../../../product-data/product-data';

import ProductSlider from '../ProductSlider';
import ProductCard from '../../product-card/ProductCard';

const Shoes = () => {
	const renderedShoes = shoes.map((product) => (
		<SwiperSlide key={product.id}>
			<ProductCard product={product} />
		</SwiperSlide>
	));
	return (
		<>
			<ProductSlider>{renderedShoes}</ProductSlider>
		</>
	);
};

export default Shoes;
