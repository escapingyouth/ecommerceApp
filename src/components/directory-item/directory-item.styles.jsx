import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const DirectoryCard = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: ${({ imageUrl }) => `linear-gradient(
				to right,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0.4)
			),url(${imageUrl}) center/cover no-repeat`};

	@media screen and (max-width: 57em) {
		justify-content: flex-end;
	}
`;
export const DirectoryText = styled.div`
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
export const DirectoryLink = styled(Link)`
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
