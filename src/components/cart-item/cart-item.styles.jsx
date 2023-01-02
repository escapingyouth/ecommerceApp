import styled from 'styled-components';

export const CartItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1em;
	border-bottom: 1px solid #ccc;
`;

export const ImageContainer = styled.div`
	width: 5rem;

	img {
		width: 100%;
	}
`;

export const CartItemDetails = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	h3 {
		font-weight: 500;
		text-transform: capitalize;
		font-size: 0.9rem;
	}

	span:nth-of-type(2) {
		font-size: 0.7rem;
		cursor: pointer;
	}
`;

export const QuantityControlContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
`;
export const QuantityButton = styled.button`
	font-size: 1.2rem;
	border: none;
	background-color: transparent;
	cursor: pointer;
	padding: 0.05em 0.2em;

	&:hover {
		background-color: #f8f9fa;
	}
`;
