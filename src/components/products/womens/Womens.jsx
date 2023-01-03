import { useContext } from 'react';

import { SwiperSlide } from 'swiper/react';

import { CategoriesContext } from '../../../contexts/CategoriesContext';

import ProductSlider from '../ProductSlider';
import ProductCard from '../../product-card/ProductCard';

const Womens = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	const { womens } = categoriesMap;

	return (
		<>
			<ProductSlider>
				{womens &&
					womens
						.filter((_, index) => index < 9)
						.map((product) => (
							<SwiperSlide key={product.id}>
								<ProductCard product={product} />
							</SwiperSlide>
						))}
			</ProductSlider>
		</>
	);
};

export default Womens;
