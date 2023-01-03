import styled from 'styled-components';

import womens from '../../assets/images/shop-cards/womens.jpg';
import mens from '../../assets/images/shop-cards/mens.jpg';
import kids from '../../assets/images/shop-cards/kids.jpg';
import shoes from '../../assets/images/shop-cards/shoes.jpg';
import beauty from '../../assets/images/shop-cards/beauty.jpg';
import accessories from '../../assets/images/shop-cards/accessories.jpg';

import { Link } from 'react-router-dom';

export const ShopCardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 100vh);
	row-gap: 0.3rem;

	.shop-womens {
		background: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0.4)
			),
			url(${womens}) center/cover no-repeat;
	}

	.shop-mens {
		background: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0.4)
			),
			url(${mens}) center/cover no-repeat;
	}
	.shop-kids {
		background: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0.4)
			),
			url(${kids}) center/cover no-repeat;
	}
	.shop-shoes {
		background: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0.4)
			),
			url(${shoes}) center/cover no-repeat;
	}
	.shop-beauty {
		background: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0.4)
			),
			url(${beauty}) center/cover no-repeat;
	}
	.shop-accessories {
		background: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0.4)
			),
			url(${accessories}) center/cover no-repeat;
	}

	@media screen and (max-width: 57em) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 30vh);
		column-gap: 0.3rem;
	}
	@media screen and (max-width: 46em) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(6, 50vh);
	}
	@media screen and (max-width: 26em) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(6, 50vh);
	}
`;

export const ShopCardContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 57em) {
		justify-content: flex-end;
	}
`;
export const ShopCardText = styled.div`
	text-align: center;

	h3 {
		font-size: 3rem;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: #fff;
		margin-bottom: 3rem;
	}

	@media screen and (max-width: 57em) {
		margin-bottom: 3rem;

		h3 {
			font-size: 1.5rem;
			margin-bottom: 2rem;
		}
	}
`;
export const ShopLink = styled(Link)`
	color: #fff;
	border: 1px solid #fff;
	padding: 0.7em 2em;
	text-transform: capitalize;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #fff;
		color: #000;
	}
`;
