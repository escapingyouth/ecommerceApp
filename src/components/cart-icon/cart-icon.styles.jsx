import styled from 'styled-components';

import { ReactComponent as ShoppingBagSvg } from '../../assets/svgs/bag-icon.svg';

export const CartIconContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const ShoppingBagIcon = styled(ShoppingBagSvg)`
	width: 1.8rem;
	height: 1.8rem;
	margin-bottom: 0.3rem;
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 0.75rem;
	bottom: 9px;
	color: #fff;
	font-weight: bold;
`;
