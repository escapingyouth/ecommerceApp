import styled from 'styled-components';

import { BaseButton } from '../../components/button/button.styles';

export const CheckoutSection = styled.section`
	margin: 7rem auto;
	height: 100%;
	padding: 0 5em;

	h1 {
		font-size: 2.5rem;
		font-weight: 500;
	}
	& > ${BaseButton} {
		display: inline-block;
		width: max-content;
		padding: 1em;
	}

	@media screen and (max-width: 64em) {
		padding: 0 1em;

		h1 {
			font-size: 2.3rem;
		}
	}
	@media screen and (max-width: 34em) {
		padding: 0 0.5em;
	}
	@media screen and (max-width: 26em) {
		h1 {
			font-size: 2rem;
		}
	}
`;
export const CheckoutContainer = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	margin: 1.8rem 0;
	width: 100%;

	@media screen and (max-width: 42em) {
		display: block;
	}
`;
export const CheckoutItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const CartDetails = styled.div`
	flex-basis: 70%;

	@media screen and (max-width: 52em) {
		flex-basis: 60%;
	}
	@media screen and (max-width: 34em) {
		margin-bottom: 2rem;
	}
`;
export const OrderContainer = styled.div`
	flex-basis: 30%;
	padding: 1em;
	border: 1px solid #ccc;

	@media screen and (max-width: 52em) {
		flex-basis: 40%;
	}

	.cart-totals-sub,
	.cart-totals-main {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2rem;
	}
	.cart-totals-sub {
		padding-bottom: 1em;
		border-bottom: 1px solid #ccc;
	}
	.cart-totals-main {
		.title,
		.price {
			font-size: 1.5rem;
			font-weight: 500;
		}
	}
`;
