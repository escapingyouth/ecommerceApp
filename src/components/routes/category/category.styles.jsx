import styled from 'styled-components';

import { Link } from 'react-router-dom';

import {
	ProductImageHover,
	ProductImage,
	ProductContainer
} from '../../product-card/product-card.styles';

export const CategoryContainer = styled.div`
	margin-top: 6rem;
	padding: 0 5rem;

	h1 {
		margin-bottom: 1rem;
		text-transform: capitalize;
		/* text-align: center; */
		font-weight: bold;
		font-size: 3rem;
	}

	p {
		font-weight: bold;
		font-size: 1rem;
		margin-bottom: 5rem;
	}

	${ProductContainer} {
		height: 90%;
		position: relative;
	}
	${ProductImageHover} {
		display: none;
	}
	/* ${ProductImage} {
		width: 80%;
		height: 100%;
	} */

	@media screen and (max-width: 52em) {
		padding: 0 2rem;

		h1 {
			font-size: 2rem;
		}

		p {
			font-size: 0.8rem;
		}
	}
`;

export const CategoryLinkContainer = styled.div`
	margin-bottom: 4rem;
`;
export const CategoryLink = styled(Link)`
	font-size: 1rem;
	color: #000;

	&:first-child:hover,
	&:first-child:active {
		color: #007bff;
		font-weight: bold;
	}
	&:last-child {
		font-weight: bold;
		text-transform: capitalize;
	}
`;

export const CategoryProducts = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 1fr);
	gap: 3rem 2rem;

	@media screen and (max-width: 64em) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and (max-width: 44em) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 26em) {
		grid-template-columns: 1fr;
	}
`;
