import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
	width: 100%;
	font-size: 0.9rem;
	text-align: center;
	cursor: pointer;
	font-family: inherit;
	padding: 1em 0.5em;
	background-color: transparent;
	border: none;
	border-radius: 3px;
	background-color: #000;
	color: #fff;
	margin-bottom: 0.7rem;

	&:hover {
		background-color: #212529;
	}
`;
export const GoogleSigninButton = styled(BaseButton)`
	background-color: #fff;
	display: flex;
	align-items: center;
	border: 1px solid #ccc;

	span {
		font-weight: bold;
		flex-grow: 2;
		color: #000;
	}

	&:hover {
		background-color: #f1f3f5;
	}
`;
export const InvertedButton = styled(BaseButton)`
	background-color: #000;
	color: #fff;
	border: none;
	padding: 1.3em;

	&:hover {
		background-color: #007bff;
	}
`;

export const ButtonSpinner = styled(SpinnerContainer)`
	width: 20px;
	height: 20px;
`;
