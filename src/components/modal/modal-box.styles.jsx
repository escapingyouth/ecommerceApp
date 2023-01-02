import styled from 'styled-components';

import Box from '@mui/material/Box';

export const ModalContainer = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.25);
	width: 25rem;
	min-width: 10rem;
	padding: 2em 1.5em;

	@media only screen and (max-width: 33em) {
		width: 100%;
		height: 100%;
		border-radius: 0px;
	}
`;
