import styled from 'styled-components';

import { ReactComponent as CloseSvg } from '../../assets/svgs/cross.svg';

const CloseIcon = styled(CloseSvg)`
	width: 1.8rem;
	height: 1.8rem;
	cursor: pointer;
	border-radius: 8px;
	padding: 0.3em;

	&:hover {
		background-color: #f5f5f5;
	}
`;
export default CloseIcon;
