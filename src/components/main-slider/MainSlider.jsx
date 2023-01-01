import Slider from '../slider/Slider';
import { SwiperSlide } from 'swiper/react';

import images from './images';

import './main-slider.scss';

const MainSlider = () => {
	const renderedImages = images.map(({ id, imageSource }) => {
		return (
			<SwiperSlide key={id}>
				<div className='header-slide-container'>
					<img src={imageSource} alt='slide' className='header-slide-image' />
				</div>
			</SwiperSlide>
		);
	});
	return (
		<>
			<Slider
				autoplay={{
					delay: 7500,
					disableOnInteraction: false
				}}
				loop={true}
			>
				{renderedImages}
			</Slider>
		</>
	);
};

export default MainSlider;
