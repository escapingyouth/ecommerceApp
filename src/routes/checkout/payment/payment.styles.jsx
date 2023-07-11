import styled from 'styled-components';
import Button from '../../../components/button/Button';

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

	span {
		font-weight: bold;
	}
`;

export const DeliveryTab = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
`;

export const PaymentFormContainer = styled.div`
	h3 {
		font-size: 1.2rem;
		font-weight: 500;
		margin-bottom: 1rem;
		text-transform: uppercase;
	}
`;

export const PaymentForm = styled.form`
	width: 70%;
	margin-top: 3rem;

	label {
		display: inline-block;
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}

	& > div {
		margin-bottom: 3rem;
	}

	.stripe-input-element {
		width: 100%;
		height: 3rem;
		font-family: inherit;
		font-size: inherit;
		border: 1px solid #ccc;
		border-radius: 3px;
		padding: 1em 0.5em;
		transition: all 0.3s;
	}

	@media only screen and (max-width: 34em) {
		width: 100%;
	}
`;

export const CardHolderInputContainer = styled.div``;

export const CardInputContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	.card-number-input {
		width: 70%;
		span {
			color: red;
		}
	}

	.expiration-date-input {
		width: 30%;
	}

	@media only screen and (max-width: 26em) {
		flex-direction: column;
		align-items: flex-start;
		gap: 4rem;

		.card-number-input {
			width: 100%;
		}

		.expiration-date-input {
			width: 50%;
		}
	}
`;
export const SecurityCodeInputContainer = styled.div`
	.security-code-input {
		width: 30%;
	}
	@media only screen and (max-width: 26em) {
		.security-code-input {
			width: 50%;
		}
	}
`;

export const AddressContainer = styled.div`
	margin-top: 5rem;

	h4 {
		font-weight: 500;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}

	& > article {
		border: 1px solid #ccc;
		padding: 2em;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 3rem;

		@media only screen and (max-width: 26em) {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
			font-size: 0.9rem;
		}
	}
`;

export const PaymentButton = styled(Button)``;
