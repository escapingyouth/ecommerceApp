import { PreloaderContainer } from './preloader.styles';

const Preloader = () => {
	return (
		<PreloaderContainer>
			<div class='lds-roller'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</PreloaderContainer>
	);
};

export default Preloader;
