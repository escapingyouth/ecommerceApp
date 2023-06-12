import styled from 'styled-components';

import { ProductImageHover } from '../product-card/product-card.styles';

export const ProductsSection = styled.section`
	margin: 10rem 0;
	position: relative;

	h1 {
		text-align: center;
		text-transform: uppercase;
		font-weight: 500;
		margin-bottom: 5rem;
	}

	#mens,
	#womens {
		& ${ProductImageHover} {
			object-fit: cover;
			object-position: top;
		}
	}
`;

export const ProductsCatalogue = styled.div`
	margin-bottom: 5rem;

	.swiper {
		height: 35rem;
		width: 95%;
		margin: 0 auto;
		padding: 1em;

		@media (min-width: 29em) and (max-width: 40em) {
			width: 80%;
		}
		@media (min-width: 35em) and (max-width: 40em) {
			width: 70%;
		}
	}
	.swiper-slide {
		height: 90%;
	}

	.swiper-button-prev:after,
	.swiper-button-next:after {
		font-size: 1rem;
		font-weight: bold;
		color: #007bff;
	}
	.swiper-pagination-bullet-active {
		background-color: #007bff;
	}
`;
