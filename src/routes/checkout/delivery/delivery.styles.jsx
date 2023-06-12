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

	.continue-btn {
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
		position: relative;
	}

	@media only screen and (max-width: 34em) {
		flex-direction: column;

		.first-name-input,
		.last-name-input {
			width: 100%;
		}
	}
`;

export const customStyles = {
	control: (provided, state) => ({
		...provided,
		border: '1px solid #ccc',
		borderRadius: '3px',
		boxShadow: state.isFocused ? '0 0.625rem 1.25rem rgba(#000, 0.1)' : null,
		outline: state.isFocused ? 'none' : null,

		'&:hover': {
			borderColor: '#888'
		}
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isFocused ? '#222' : 'white',
		color: state.isFocused ? '#fff' : 'inherit',
		cursor: 'pointer'
	})
};

export const CountryInputContainer = styled.div``;

export const AddressInputContainer = styled.div`
	.address-input {
		position: relative;
	}
`;

export const LocationInputContainer = styled.div`
	.city-state-container {
		display: flex;
		align-items: center;
		gap: 2rem;
		margin-bottom: 3rem;

		.city-input,
		.state-input {
			width: 50%;
			position: relative;
		}
	}
	.zip-code-input {
		position: relative;
	}

	@media only screen and (max-width: 34em) {
		.city-state-container {
			flex-direction: column;

			.city-input,
			.state-input {
				width: 100%;
			}
		}
	}
`;

export const PhoneInputContainer = styled.div``;

export const CheckboxInputContainer = styled.div`
	input[type='checkbox'] {
		margin-right: 0.3rem;
		cursor: pointer;
	}
`;
