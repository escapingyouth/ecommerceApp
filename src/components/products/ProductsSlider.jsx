import Slider from '../slider/Slider';

const ProductsSlider = ({ children }) => {
	return (
		<>
			<Slider
				className='products-slider'
				slidesPerView={4}
				breakpoints={{
					200: {
						slidesPerView: 1,
						slidesPerGroup: 1,
						spaceBetween: 20
					},
					640: {
						slidesPerView: 2,
						slidesPerGroup: 2,
						spaceBetween: 20
					},
					768: {
						slidesPerView: 2,
						slidesPerGroup: 2,
						spaceBetween: 40
					},
					820: {
						slidesPerView: 3,
						spaceBetween: 50
					},
					1024: {
						slidesPerView: 4,
						slidesPerGroup: 4,
						spaceBetween: 30
					}
				}}
			>
				{children}
			</Slider>
		</>
	);
};

export default ProductsSlider;
