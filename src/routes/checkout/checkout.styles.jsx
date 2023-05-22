import styled from 'styled-components';

import { ReactComponent as PadlockSvg } from '../../assets/svgs/padlock.svg';
import { ReactComponent as LogoSvg } from '../../assets/svgs/logo.svg';
import { ReactComponent as PhoneSvg } from '../../assets/svgs/phone.svg';

export const CheckoutHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid #ccc;
	padding: 0.5em 3em;

	.secure-checkout {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.contact {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
	}
`;

export const PadlockIcon = styled(PadlockSvg)`
	width: 1rem;
	height: 1rem;
`;
export const LogoIcon = styled(LogoSvg)`
	fill: '#000';
	path {
		fill: #000;
	}
`;
export const PhoneIcon = styled(PhoneSvg)``;

export const CheckoutMain = styled.main`
	padding: 2em 3em;
`;

export const CheckoutProgress = styled.div`
	margin-bottom: 6rem;
`;
export const ProgressPoints = styled.ol`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: minmax(0, 1fr);
	grid-gap: 0.8rem;
	width: 100%;
`;

export const DeliveryTab = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
`;
export const PaymentTab = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
`;

export const ProgressBar = styled.div`
	width: 100%;
	height: 0.4rem;
	background-color: #222;
	border-radius: 6px;
`;

export const OrderSummary = styled.article``;

export const OrderDetails = styled.div``;
