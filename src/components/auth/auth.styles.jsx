import styled, { css } from 'styled-components';

export const AuthContainer = styled.div`
	margin-bottom: 2rem;
`;

export const AuthHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;

	h2 {
		font-weight: 400;
		font-size: 1.2rem;
	}
`;

export const AuthLinksContainer = styled.div`
	position: relative;
	display: flex;
	gap: 3.5rem;
	border-bottom: 2px solid #ccc;
	padding-bottom: 0.2em;
`;
export const LinkBox = styled.div`
	position: relative;
	display: inline-block;
`;

export const AuthButton = styled.button`
	font-size: 1rem;

	text-transform: uppercase;
	border: none;
	background-color: transparent;
	cursor: pointer;

	${({ isActiveTab }) =>
		isActiveTab
			? css`
					color: #000;
					&::after {
						content: '';
						display: block;
						position: absolute;
						height: 2px;
						z-index: 3;
						bottom: -0.35rem;
						width: 100%;
						background-color: #000;
						transition: all ease-in-out 200ms;
					}
			  `
			: css`
					color: #495057;
			  `};

	&:hover {
		color: #000;
	}
`;
