import MainSlider from '../../main-slider/MainSlider';
import Products from '../../products/Products';
import Directory from '../../directory/Directory';
import AboutUs from '../../about-us/AboutUs';
import Footer from '../../footer/Footer';

const Home = () => {
	return (
		<>
			<MainSlider />
			<main>
				<Products />
				<Directory />
				<AboutUs />
			</main>
			<Footer />
		</>
	);
};

export default Home;
