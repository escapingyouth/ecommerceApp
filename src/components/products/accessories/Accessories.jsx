import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../../store/categories/categories.selector';

import { SwiperSlide } from 'swiper/react';

import ProductSlider from '../ProductSlider';
import ProductCard from '../../product-card/ProductCard';

const Accessories = () => {
	const categoriesMap = useSelector(selectCategoriesMap);

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
