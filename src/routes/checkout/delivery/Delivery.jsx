import { useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

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
	CheckboxInputContainer
} from './delivery.styles';

const Delivery = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ shouldUseNativeValidation: true });

	const onSubmit = (data) => console.log(data);

	const deliveryTotal = 20;
	const taxTotal = 0;

	const cartCount = useSelector(selectCartCount);
	const cartTotal = useSelector(selectCartTotal);

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
					<DeliveryForm onSubmit={handleSubmit(onSubmit)}>
						<NameInputContainer>
							<div className='first-name-input'>
								<label htmlFor='firstName'>First name *</label>
								<input
									type='text'
									{...register('firstName', {
										required: 'Please enter your first name.'
									})}
								/>
								{errors.firstName?.type === 'required' && (
									<p role='alert'>Required</p>
								)}
							</div>

							<div className='last-name-input'>
								<label htmlFor='lastName'>Last name *</label>
								<input
									type='text'
									{...register('lastName', {
										required: 'Please enter your last name.'
									})}
								/>
								{errors.lastName?.type === 'required' && (
									<p role='alert'>Required</p>
								)}
							</div>
						</NameInputContainer>

						<CountryInputContainer>
							<label htmlFor='country'>Country/Region *</label>
							<select {...register('country', { required: true })}>
								<option value='us'>United States</option>
								<option value='uk'>United Kingdom</option>
								<option value='ger'>Germany</option>
								<option value='gh'>Ghana</option>
							</select>
						</CountryInputContainer>
						<AddressInputContainer>
							<div className='address-input'>
								<label htmlFor='address'>Address *</label>
								<input
									type='text'
									{...register('address', {
										required: 'Please enter your address.'
									})}
								/>
								{errors.address?.type === 'required' && (
									<p role='alert'>Required</p>
								)}
							</div>
						</AddressInputContainer>

						<LocationInputContainer>
							<div className='city-state-container'>
								<div className='city-input'>
									<label htmlFor='city'>City *</label>
									<input
										type='text'
										{...register('city', {
											required: 'Please enter your city.'
										})}
									/>
									{errors.city?.type === 'required' && (
										<p role='alert'>Required</p>
									)}
								</div>

								<div className='state-input'>
									<label htmlFor='state'>State *</label>
									<input
										type='text'
										{...register('state', {
											required: 'Please enter your state.'
										})}
									/>
									{errors.state?.type === 'required' && (
										<p role='alert'>Required</p>
									)}
								</div>
							</div>

							<div className='zip-code-input'>
								<label htmlFor='zipCode'>Postal or zip code *</label>
								<input
									type='text'
									{...register('zipCode', {
										required: 'Please enter your zip code.'
									})}
								/>
								{errors.zipCode?.type === 'required' && (
									<p role='alert'>Required</p>
								)}
							</div>
						</LocationInputContainer>
						<PhoneInputContainer>
							<div className='country-code-input'>
								<label htmlFor='countryCode'>Country code *</label>
								<select {...register('countryCode', { required: true })}>
									<option value='us'>+1</option>
									<option value='uk'>+44</option>
									<option value='ger'>+49</option>
									<option value='gh'>+233</option>
								</select>
							</div>
							<div className='phone-number-input'>
								<label htmlFor='phoneNumber'>Phone *</label>
								<input
									type='text'
									{...register('phoneNumber', {
										required: 'Please enter your phone number.'
									})}
								/>
								{errors.phoneNumber?.type === 'required' && (
									<p role='alert'>Required</p>
								)}
							</div>
						</PhoneInputContainer>
						<CheckboxInputContainer>
							<div className='use-billing-input'>
								<input
									type='checkbox'
									{...register('useBilling', { required: true })}
								/>
								<label htmlFor='useBilling'>Use as billing address</label>
							</div>
						</CheckboxInputContainer>
						<button type='submit'>Submit</button>
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
								<span>{deliveryTotal}</span>
							</div>
							<div className='order-tax'>
								<span>Estimated Tax</span>
								<span>{taxTotal}</span>
							</div>
						</OrderDetails>
						<OrderTotal>
							<span>Total</span>
							<span>${cartTotal + deliveryTotal + taxTotal}.00</span>
						</OrderTotal>
					</OrderBox>

					<Button buttonType={ButtonTypeClasses.base} className='continue-btn'>
						Save and Continue
					</Button>
				</OrderBoxContainer>

				<CancelOrder to='/basket'>Cancel</CancelOrder>
			</CheckoutMain>
		</>
	);
};

export default Delivery;
