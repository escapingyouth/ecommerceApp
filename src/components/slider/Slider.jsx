// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper';

const Slider = ({
	children,
	slidesPerView,

	loop,
	autoplay,
	breakpoints
}) => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				slidesPerView={slidesPerView}
				loop={loop}
				keyboard={{
					enabled: true
				}}
				autoplay={autoplay}
				pagination={{
					clickable: true
				}}
				breakpoints={breakpoints}
				navigation={true}
				modules={[Keyboard, Autoplay, Pagination, Navigation]}
			>
				{children}
			</Swiper>
		</>
	);
};

export default Slider;
