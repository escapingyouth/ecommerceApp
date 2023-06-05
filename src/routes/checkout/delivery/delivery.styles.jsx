import styled from 'styled-components';

export const DeliveryTab = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;

	span {
		font-weight: bold;
	}
`;
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

	${ProgressBar} {
		background-color: #ccc;
	}
`;

export const DeliveryFormContainer = styled.div``;

export const DeliveryForm = styled.form`
	margin-top: 3rem;

	label {
		display: inline-block;
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}

	& > div {
		margin-bottom: 3rem;
	}
`;

export const NameInputContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	.first-name-input,
	.last-name-input {
		width: 50%;
	}

	@media only screen and (max-width: 34em) {
		flex-direction: column;
		gap: 1rem;

		.first-name-input,
		.last-name-input {
			width: 100%;
		}
	}
`;

export const CountryInputContainer = styled.div``;

export const AddressInputContainer = styled.div``;

export const LocationInputContainer = styled.div`
	.city-state-container {
		display: flex;
		align-items: center;
		gap: 2rem;
		margin-bottom: 3rem;

		.city-input,
		.state-input {
			width: 50%;
		}
	}

	@media only screen and (max-width: 34em) {
		.city-state-container {
			flex-direction: column;
			gap: 1rem;

			.city-input,
			.state-input {
				width: 100%;
			}
		}
	}
`;

export const PhoneInputContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	.country-code-input,
	.phone-number-input {
		width: 50%;
	}

	@media only screen and (max-width: 34em) {
		flex-direction: column;
		gap: 1rem;

		.country-code-input,
		.phone-number-input {
			width: 100%;
		}
	}
`;

export const CheckboxInputContainer = styled.div`
	input[type='checkbox'] {
		margin-right: 0.3rem;
		cursor: pointer;
	}
`;
