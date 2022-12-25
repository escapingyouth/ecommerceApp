// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper';

const Slider = ({ children }) => {
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
				{children}
			</Swiper>
		</>
	);
};

export default Slider;
