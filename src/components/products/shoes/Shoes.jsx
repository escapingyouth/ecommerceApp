import { SwiperSlide } from 'swiper/react';

import { shoes } from './ShoesList';

import ProductsSlider from '../ProductsSlider';
import ProductCard from '../../product-card/ProductCard';

const Shoes = () => {
	const renderedShoes = shoes.map((product) => (
		<SwiperSlide key={product.id}>
			<ProductCard product={product} />
		</SwiperSlide>
	));
	return (
		<>
			<ProductsSlider>{renderedShoes}</ProductsSlider>
		</>
	);
};

export default Shoes;
