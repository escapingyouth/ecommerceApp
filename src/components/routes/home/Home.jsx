import MainSlider from '../../main-slider/MainSlider';
import Products from '../../products/Products';
import Directory from '../../directory/Directory';
import OurBrand from '../../our-brand/OurBrand';
import Footer from '../../footer/Footer';

const Home = () => {
	return (
		<>
			<MainSlider />
			<main>
				<Products />
				<Directory />
				<OurBrand />
			</main>
			<Footer />
		</>
	);
};

export default Home;
