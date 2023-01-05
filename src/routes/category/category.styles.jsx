import styled from 'styled-components';

import { Link } from 'react-router-dom';

import {
	ProductImageHover,
	ProductImage,
	ProductContainer
} from '../../components/product-card/product-card.styles';

export const CategoryContainer = styled.div`
	margin-top: 6rem;
	padding: 0 5rem;

	h1 {
		margin-bottom: 1rem;
		text-transform: capitalize;
		font-weight: bold;
		font-size: 3rem;
	}

	p {
		font-weight: bold;
		font-size: 1rem;
		margin-bottom: 2rem;
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

export const FilterContainer = styled.div`
	/* display: flex; */
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	padding: 1em;
	margin-bottom: 6rem;

	input {
		display: block;
		font-family: inherit;
		width: 10%;
		padding: 0.5em;
		border: 1px solid #ccc;
		font-size: 0.8rem;
		appearance: none;

		&::-webkit-search-cancel-button {
			appearance: none;
		}

		&:focus {
			outline: 1px solid #000;
		}
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
