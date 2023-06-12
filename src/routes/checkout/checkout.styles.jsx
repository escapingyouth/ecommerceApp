import styled from 'styled-components';

import { ReactComponent as PadlockSvg } from '../../assets/svgs/padlock.svg';
import { ReactComponent as LogoSvg } from '../../assets/svgs/logo.svg';
import { ReactComponent as PhoneSvg } from '../../assets/svgs/phone.svg';
import arrowSvg from '../../assets/svgs/dropdown-arrow.svg';

import { Link } from 'react-router-dom';

export const CheckoutHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid #ccc;
	padding: 0.5em 3em;

	.secure-checkout {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.contact {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
	}

	@media only screen and (max-width: 64em) {
		.contact {
			display: none;
		}
		.secure-checkout {
			order: 2;
		}
	}

	@media only screen and (max-width: 34em) {
		padding: 0.5em 1em;
	}
`;

export const PadlockIcon = styled(PadlockSvg)`
	width: 1rem;
	height: 1rem;
`;
export const LogoIcon = styled(LogoSvg)`
	fill: '#000';
	path {
		fill: #000;
	}
`;
export const PhoneIcon = styled(PhoneSvg)``;

export const CheckoutMain = styled.main`
	display: flex;
	flex-direction: column;
	width: 65%;
	padding: 3em;

	h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	span {
		font-size: 0.9rem;
	}
	input[type='text'] {
		width: 100%;
		height: 3rem;
		font-family: inherit;
		font-size: inherit;
		border: 1px solid #ccc;
		border-radius: 3px;
		padding: 1em 0.5em;
		transition: all 0.3s;

		&:hover {
			border-color: #888;
		}

		&:focus {
			outline: none;
			box-shadow: 0 0.625rem 1.25rem rgba(#000, 0.1);
			border-bottom: 3px solid #007bff;
		}
		&:invalid {
			border: 1.5px solid #c41429;
		}
	}

	select {
		appearance: none;
		background-color: transparent;
		width: 100%;
		padding: 1em 0.5em;
		display: block;
		height: 3rem;
		border: 1px solid #ccc;
		border-radius: 3px;
		font-family: inherit;
		cursor: pointer;

		background: ${`url(${arrowSvg}) right center/contain no-repeat`};

		&:focus {
			outline: none;
		}
	}

	@media only screen and (max-width: 64em) {
		width: 100%;
	}

	@media only screen and (max-width: 34em) {
		padding: 1em;

		h3 {
			font-size: 1rem;
		}
	}
	@media only screen and (max-width: 26em) {
		padding: 0.5em;
	}
`;

export const CheckoutProgress = styled.div`
	margin-bottom: 6rem;
`;

export const CancelOrder = styled(Link)`
	font-size: 1rem;
	text-decoration: underline;
	color: #000;
`;
export const ProgressPoints = styled.ol`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: minmax(0, 1fr);
	grid-gap: 0.8rem;
	width: 100%;
`;

export const OrderBoxContainer = styled.div`
	position: fixed;
	top: 20%;
	right: 5%;
	width: 27%;

	@media only screen and (max-width: 64em) {
		position: initial;
		display: block;
		width: 100%;
		margin-bottom: 3rem;
	}
`;
export const OrderBox = styled.div`
	border: 1px solid #ccc;
	border-top: 3px solid #000;
	margin-bottom: 1.5rem;
	padding: 1em;
`;
export const OrderHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	margin-bottom: 1rem;
	padding-bottom: 1em;

	.order-count {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.8rem;
		height: 1.8rem;
		padding: 1em;
		border-radius: 50%;
		background-color: #000;
		color: #fff;
	}
`;
export const OrderDetails = styled.div`
	border-bottom: 1px solid #ccc;
	margin-bottom: 1rem;
	padding-bottom: 1em;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		span {
			font-size: 0.9rem;
		}
	}
`;
export const OrderTotal = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	span:first-of-type {
		font-weight: bold;
	}
`;
