import Slider from '../../slider/Slider';
import { SwiperSlide } from 'swiper/react';

import './slider.scss';

import images from './ImageList';

const HeaderSlider = () => {
	const renderedImages = images.map((image, index) => {
		return (
			<SwiperSlide key={index}>
				<div>
					<img src={image.src} alt={image.alt} />
				</div>
			</SwiperSlide>
		);
	});
	return (
		<>
			<Slider>{renderedImages}</Slider>
		</>
	);
};

export default HeaderSlider;
