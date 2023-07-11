import styled from 'styled-components';

import { ReactComponent as Preloader } from '../../assets/svgs/preloader.svg';

export const PreloaderContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #000;
`;

export const PreloaderIcon = styled(Preloader)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50px;
	height: 50px;
`;
