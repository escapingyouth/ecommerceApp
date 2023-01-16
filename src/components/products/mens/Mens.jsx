import { useSelector } from 'react-redux';

import { SwiperSlide } from 'swiper/react';

import { selectCategoriesMap } from '../../../store/categories/categories.selector';
import ProductSlider from '../ProductSlider';
import ProductCard from '../../product-card/ProductCard';

const Mens = () => {
	const categoriesMap = useSelector(selectCategoriesMap);

	const { mens } = categoriesMap;

	return (
		<>
			<ProductSlider>
				{mens &&
					mens
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

export default Mens;
