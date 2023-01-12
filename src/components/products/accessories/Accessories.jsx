import { useContext } from 'react';

import { SwiperSlide } from 'swiper/react';

import { CategoriesContext } from '../../../contexts/CategoriesContext';

import ProductSlider from '../ProductSlider';
import ProductCard from '../../product-card/ProductCard';

const Accessories = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	const { accessories } = categoriesMap;

	return (
		<>
			<ProductSlider>
				{accessories &&
					accessories
						.filter((_, index) => index < 8)
						.map((product) => (
							<SwiperSlide key={product.id}>
								<ProductCard product={product} />
							</SwiperSlide>
						))}
			</ProductSlider>
		</>
	);
};

export default Accessories;
