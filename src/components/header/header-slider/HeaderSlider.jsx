import Slider from '../../slider/Slider';
import { SwiperSlide } from 'swiper/react';

import './header-slider.scss';

import images from './ImageList';

const HeaderSlider = () => {
	const renderedImages = images.map(({ id, imageUrl }) => {
		return (
			<SwiperSlide key={id}>
				<div className='header-slide-container'>
					<img src={imageUrl} alt='slide' className='header-slide-image' />
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

export default HeaderSlider;
