import styled, { css } from 'styled-components';

import { InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
	position: fixed;
	top: 0;
	right: -100%;
	width: 28%;
	height: 100vh;
	background-color: #fff;
	padding: 1em;
	color: #000;
	z-index: 2000;
	transition: 0.3s ease-out;
	box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.25);

	

	@media screen and (max-width: 64em) {
		width: 35%;
	}
	@media screen and (max-width: 54em) {
		width: 50%;
	}
	@media screen and (max-width: 48em) {
		width: 55%;
	}
	@media screen and (max-width: 33.75em) {
		width: 75%;
	}
	@media screen and (max-width: 26em) {
		width: 100%;
	}

	${({ isCartOpen }) =>
		isCartOpen &&
		css`
			right: 0;
		`}};
`;
export const CartDropdownHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 1em;
	border-bottom: 1px solid #ccc;
	span {
		font-size: 1.5rem;
		font-weight: 400;
	}
`;

export const CartItems = styled.div`
	height: 50%;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.4rem;
		background-color: #f5f5f5;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ccc;
	}
`;
export const CartTotals = styled.div`
	margin: 2rem 0;
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.cart-totals-sub {
		margin-bottom: 1rem;
		border-bottom: 3px solid #ccc;
		padding-bottom: 1em;
	}
	.cart-totals-main {
		.total-title,
		.total-price {
			font-size: 1.5rem;
			font-weight: 500;
		}
	}
`;
export const CartButtonsContainer = styled.div`
	${InvertedButton}:not(:last-child) {
		margin-bottom: 0.7rem;
	}
`;

export const EmptyMessage = styled.span`
	display: inline-block;
	font-size: 2rem;
	text-align: center;
	margin: 2rem 0;
	margin-left: 4rem;
`;
