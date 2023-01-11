import Slider from '../slider/Slider';
import { SwiperSlide } from 'swiper/react';

import images from './images';

import './main-slider.scss';

const MainSlider = () => {
	const renderedImages = images.map(({ id, imageSource }) => {
		return (
			<SwiperSlide key={id}>
				<div>
					<img
						src={imageSource}
						alt='slide'
						loading='lazy'
						className='header-slide-image'
					/>
				</div>
			</SwiperSlide>
		);
	});
	return (
		<>
			<Slider loop={true}>{renderedImages}</Slider>
		</>
	);
};

export default MainSlider;
