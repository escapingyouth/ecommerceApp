import styled from 'styled-components';

export const ProgressBar = styled.div`
	width: 100%;
	height: 0.4rem;
	background-color: #222;
	border-radius: 6px;
`;
export const PaymentTab = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
`;

export const DeliveryTab = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;

	span {
		font-weight: bold;
	}

	${ProgressBar} {
		background-color: #ccc;
	}
`;
