import MainSlider from '../../components/main-slider/MainSlider';
import Products from '../../components/products/Products';
import Directory from '../../components/directory/Directory';
import OurBrand from '../../components/our-brand/OurBrand';
import Footer from '../../components/footer/Footer';

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
