import { SwiperSlide } from 'swiper/react';
import Slider from '../slider/Slider';

import { shoes } from './ProductList';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './products.scss';

const Products = () => {
	const renderedShoes = shoes.map((shoe, index) => (
		<SwiperSlide key={index}>
			<article className='product-slide-container'>
				<img src={shoe.src} alt={shoe.alt} className='product-slide-image' />
				<div className='product-details-container'>
					<div className='product-details'>
						<h3 className='product-name'>{shoe.name}</h3>
						<p className='product-price'>{shoe.price}</p>
					</div>
					<div className='product-icon-container'>
						<ShoppingBagIcon fontSize='large' className='product-icon' />
					</div>
				</div>
			</article>
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
						400: {
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
