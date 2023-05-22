import styled from 'styled-components';
import { QuantityControlContainer } from '../cart-item/cart-item.styles';

export const BasketItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 1rem;
	text-align: center;
	height: 8rem;
	padding: 1em 0;
	margin-bottom: 2rem;
	border-bottom: 1px solid #ccc;

	@media screen and (max-width: 26em) {
		font-size: 0.8rem;
	}
`;
export const BasketImageContainer = styled.div`
	width: 5rem;
	min-width: 3rem;
	img {
		width: 100%;
	}
`;
export const ItemDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.name {
		color: #014ba0;
		text-transform: capitalize;

		&:hover {
			font-style: italic;
		}
	}

	${QuantityControlContainer} {
		flex-direction: row;
	}
`;

export const ItemTotal = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-size: 1rem;
	font-weight: bold;
`;
