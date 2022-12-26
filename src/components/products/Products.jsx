import { SwiperSlide } from 'swiper/react';
import Slider from '../slider/Slider';

import { shoes } from './ProductList';

import ProductCard from '../product-card/ProductCard';
import './products.scss';

const Products = () => {
	const renderedShoes = shoes.map((shoe, index) => (
		<SwiperSlide key={shoe.id}>
			<ProductCard shoe={shoe} />
		</SwiperSlide>
	));
	return (
		<>
			<section className='products'>
				<h1 className='products-title'>Featured products</h1>

				<Slider
					className='products-slider'
					slidesPerView={4}
					slidesPerGroup={4}
					breakpoints={{
						200: {
							slidesPerView: 1,
							spaceBetween: 20
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 40
						},
						820: {
							slidesPerView: 3,
							spaceBetween: 50
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 30
						}
					}}
				>
					{renderedShoes}
				</Slider>
			</section>
		</>
	);
};

export default Products;
