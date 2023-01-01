import { useContext } from 'react';

import { SwiperSlide } from 'swiper/react';

import { CategoriesContext } from '../../../contexts/CategoriesContext';

import ProductSlider from '../ProductSlider';
import ProductCard from '../../product-card/ProductCard';

const Mens = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	const { mens } = categoriesMap;

	return (
		<>
			<ProductSlider>
				{mens &&
					mens.map((product) => (
						<SwiperSlide key={product.id}>
							<ProductCard product={product} />
						</SwiperSlide>
					))}
			</ProductSlider>
		</>
	);
};

export default Mens;
