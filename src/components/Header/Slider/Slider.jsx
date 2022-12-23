// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper';

import './slider.scss';

import images from './ImageList';

const Slider = () => {
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
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 7500,
					disableOnInteraction: false
				}}
				keyboard={{
					enabled: true
				}}
				pagination={{
					clickable: true
				}}
				navigation={true}
				modules={[Keyboard, Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				{renderedImages}
			</Swiper>
		</>
	);
};

export default Slider;
