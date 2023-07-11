import { useMemo, useContext } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { DeliveryFormContext } from '../../../context/DeliveryFormContext';

import Select from 'react-select';
import countryList from 'react-select-country-list';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

import {
	selectCartCount,
	selectCartTotal
} from '../../../store/cart/cart.selector';

import Button from '../../../components/button/Button';
import { ButtonTypeClasses } from '../../../components/button/Button';

import {
	CheckoutHeader,
	PadlockIcon,
	LogoIcon,
	PhoneIcon,
	CheckoutMain,
	CheckoutProgress,
	ProgressPoints,
	OrderBoxContainer,
	OrderBox,
	OrderHeader,
	OrderDetails,
	OrderTotal,
	CancelOrder
} from '../checkout.styles';

import {
	DeliveryTab,
	PaymentTab,
	ProgressBar,
	DeliveryFormContainer,
	DeliveryForm,
	NameInputContainer,
	CountryInputContainer,
	AddressInputContainer,
	LocationInputContainer,
	PhoneInputContainer,
	customStyles
} from './delivery.styles';

const Delivery = () => {
	const navigate = useNavigate();

	const cartCount = useSelector(selectCartCount);
	const cartTotal = useSelector(selectCartTotal);

	const deliveryTotal = 0.05 * cartTotal;
	const taxTotal = 0.1 * cartTotal;
	const amount = cartTotal + deliveryTotal + taxTotal;

	const options = useMemo(() => countryList().getData(), []);

	const { formValues, setFormValues, country, setCountry, phone, setPhone } =
		useContext(DeliveryFormContext);

	const { firstName, lastName, address, city, state, zipCode } = formValues;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		navigate('/checkout/payment');
		window.scrollTo(0, 0);
	};

	return (
		<>
			<CheckoutHeader>
				<div className='secure-checkout'>
					<PadlockIcon />
					<span>Secure checkout</span>
				</div>
				<div>
					<LogoIcon />
				</div>
				<div className='contact'>
					<span>Need Help?</span>
					<PhoneIcon />
					<span>+233 256 XXXX</span>
				</div>
			</CheckoutHeader>

			<CheckoutMain>
				<CheckoutProgress>
					<ProgressPoints>
						<DeliveryTab>
							<span>1. Delivery</span>
							<ProgressBar></ProgressBar>
						</DeliveryTab>
						<PaymentTab>
							<span>2. Payment</span>
							<ProgressBar></ProgressBar>
						</PaymentTab>
					</ProgressPoints>
				</CheckoutProgress>
				<DeliveryFormContainer>
					<h3>Add your delivery address</h3>
					<span>* Required fields</span>
					<DeliveryForm onSubmit={handleSubmit}>
						<NameInputContainer>
							<div className='first-name-input'>
								<label htmlFor='firstName'>First name *</label>
								<input
									type='text'
									name='firstName'
									value={firstName}
									onChange={handleChange}
									required
								/>
							</div>

							<div className='last-name-input'>
								<label htmlFor='lastName'>Last name *</label>
								<input
									type='text'
									name='lastName'
									value={lastName}
									onChange={handleChange}
									required
								/>
							</div>
						</NameInputContainer>

						<CountryInputContainer>
							<label htmlFor='country'>Country/Region *</label>
							<Select
								styles={customStyles}
								options={options}
								value={country}
								onChange={(country) => setCountry(country)}
							/>
						</CountryInputContainer>
						<AddressInputContainer>
							<div className='address-input'>
								<label htmlFor='address'>Address *</label>
								<input
									type='text'
									name='address'
									value={address}
									onChange={handleChange}
									required
								/>
							</div>
						</AddressInputContainer>

						<LocationInputContainer>
							<div className='city-state-container'>
								<div className='city-input'>
									<label htmlFor='city'>City *</label>
									<input
										type='text'
										name='city'
										value={city}
										onChange={handleChange}
										required
									/>
								</div>

								<div className='state-input'>
									<label htmlFor='state'>State *</label>
									<input
										type='text'
										name='state'
										value={state}
										onChange={handleChange}
										required
									/>
								</div>
							</div>

							<div className='zip-code-input'>
								<label htmlFor='zipCode'>Postal or zip code *</label>
								<input
									type='text'
									name='zipCode'
									value={zipCode}
									onChange={handleChange}
									required
								/>
							</div>
						</LocationInputContainer>
						<PhoneInputContainer>
							<div className='phone-number-input'>
								<label htmlFor='phoneNumber'>Phone *</label>
								<PhoneInput
									country={'us'}
									value={phone}
									onChange={(phone) => setPhone(phone)}
								/>
							</div>
						</PhoneInputContainer>

						<Button
							buttonType={ButtonTypeClasses.base}
							className='continue-btn'
							type='submit'
						>
							Save and Continue
						</Button>
					</DeliveryForm>
				</DeliveryFormContainer>

				<OrderBoxContainer>
					<OrderBox>
						<OrderHeader>
							<h3>Order Summary</h3>
							<div className='order-count'>
								<span>{cartCount}</span>
							</div>
						</OrderHeader>

						<OrderDetails>
							<div className='order-subtotal'>
								<span>Subtotal</span>
								<span>${cartTotal}.00</span>
							</div>
							<div className='order-delivery'>
								<span>Delivery</span>
								<span>${deliveryTotal}</span>
							</div>
							<div className='order-tax'>
								<span>Estimated Tax</span>
								<span>${taxTotal}</span>
							</div>
						</OrderDetails>
						<OrderTotal>
							<span>Total</span>
							<span>${amount}.00</span>
						</OrderTotal>
					</OrderBox>
				</OrderBoxContainer>

				<CancelOrder to='/basket'>Cancel</CancelOrder>
			</CheckoutMain>
		</>
	);
};

export default Delivery;
