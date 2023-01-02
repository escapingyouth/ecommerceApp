import styled from 'styled-components';

export const ProductImage = styled.img``;

export const ProductImageHover = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	opacity: 0;
	transition: opacity 0.2s ease-in;
`;

export const ProductImageContainer = styled.figure`
	position: relative;
	width: 100%;
	height: 50%;

	${ProductImage}, ${ProductImageHover} {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
	}
`;

export const ProductContainer = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;

	&:hover {
		cursor: pointer;
	}

	&:hover ${ProductImageHover} {
		opacity: 1;
	}
`;

export const ProductDetailsContainer = styled.div`
	width: 100%;
`;
export const ProductDetails = styled.div`
	height: 100%;

	h3 {
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: 2px;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}
	span {
		font-size: 0.9rem;
		letter-spacing: 1px;
		color: #014ba0;
		font-weight: 500;
	}
`;

export const ProductIconContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	background-color: #000;
	padding: 0.7em 0.9em;
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: #007bff;
	}
`;
