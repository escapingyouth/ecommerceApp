import styled from 'styled-components';

import brandImage from '../../assets/images/about-us/1.jpg';

export const BrandSection = styled.section`
	margin: 10rem 0;

	h1 {
		text-align: center;
		text-transform: uppercase;
		font-weight: 500;
		margin-bottom: 5rem;
	}
`;

export const BrandContainer = styled.div`
	display: flex;
	height: 75vh;
	@media screen and (max-width: 57em) {
		display: block;
		height: 60vh;
	}
	@media screen and (max-width: 48em) {
		height: 70vh;
	}
	@media screen and (max-width: 34em) {
		height: 90vh;
	}
	@media screen and (max-width: 26em) {
		height: 90vh;
	}
`;

export const BrandTextContainer = styled.div`
	background-color: #000;
	flex-basis: 50%;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0em 4em;
	font-size: 1rem;

	h2 {
		font-size: 1.7rem;
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 1.5rem;
	}
	p {
		text-align: justify;
		margin-bottom: 2rem;
	}

	span {
		font-weight: 600;
		text-transform: uppercase;
	}
	@media screen and (max-width: 57em) {
		padding: 4em;
	}
	@media screen and (max-width: 26em) {
		padding: 2em;
		h2 {
			font-size: 1.4rem;
		}
		p {
			font-size: 0.8rem;
		}
	}
`;
export const BrandImage = styled.div`
	flex-basis: 50%;
	background: ${`linear-gradient(
				to right,
				rgba(0, 123, 255,0.4),
				rgba(0, 123, 255,0.4)
			),url(${brandImage}) center/cover no-repeat`};
	background-blend-mode: multiply;

	@media screen and (max-width: 57em) {
		width: 100%;
		height: 50%;
	}
	@media screen and (max-width: 26em) {
		width: 100%;
		height: 40%;
	}
`;
export const BrandIconsContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1rem;

	a {
		color: #fff;
	}
`;
