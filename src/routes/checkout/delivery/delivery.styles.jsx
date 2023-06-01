import styled from 'styled-components';

import arrowSvg from '../../../assets/svgs/dropdown-arrow.svg';

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

export const DeliveryFormContainer = styled.div`
	h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	span {
		font-size: 0.9rem;
	}
	input[type='text'] {
		width: 100%;
		height: 3rem;
		font-family: inherit;
		font-size: inherit;
		border: 1px solid #ccc;
		border-radius: 3px;
		padding: 1em 0.5em;

		&:focus {
			outline: 1px solid #000;
		}
	}
	select {
		appearance: none;
		background-color: transparent;
		width: 100%;
		padding: 1em 0.5em;
		display: block;
		height: 3rem;
		border: 1px solid #ccc;
		border-radius: 3px;
		font-family: inherit;
		cursor: pointer;

		background: ${`url(${arrowSvg}) right center/contain no-repeat`};

		&:focus {
			outline: none;
		}
	}

	@media only screen and (max-width: 34em) {
		h3 {
			font-size: 1rem;
		}
	}
`;

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
