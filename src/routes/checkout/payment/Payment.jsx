import { useSelector } from 'react-redux';
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
	PaymentFormContainer,
	PaymentForm,
	CardHolderInputContainer,
	CardInputContainer,
	SecurityCodeInputContainer,
	AddressContainer
} from './payment.styles';

const Payment = () => {
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
				<PaymentFormContainer>
					<h3>Card Details</h3>

					<PaymentForm>
						<CardHolderInputContainer>
							<div className='card-holder-input'>
								<label htmlFor='cardHolder'>Cardholder name</label>
								<input type='text' id='cardHolder' required />
							</div>
						</CardHolderInputContainer>
						<CardInputContainer>
							<div className='card-number-input'>
								<label htmlFor='cardNumber'>Card number</label>
								<input type='text' id='cardNumber' required />
							</div>

							<div className='expiration-date-input'>
								<label htmlFor='expirationDate'>Expiration date</label>
								<input
									type='text'
									id='expirationDate'
									placeholder='MM/YY'
									required
								/>
							</div>
						</CardInputContainer>

						<SecurityCodeInputContainer>
							<div className='security-code-input'>
								<label htmlFor='securityCode'>Security code</label>
								<input type='text' id='securityCode' required />
							</div>
						</SecurityCodeInputContainer>
					</PaymentForm>
				</PaymentFormContainer>

				<AddressContainer>
					<h4>Delivery Address</h4>
					<article className='delivery-address-container'>
						<p className='name'>Michael Appiah</p>
						<p className='address'>14 Kingsroad, London </p>
						<p className='address-code'>GB-152 - UK </p>
					</article>

					<h4>Billing Address</h4>
					<article className='billing-address-container'>
						<p className='name'>Michael Appiah</p>
						<p className='address'>14 Kingsroad, London </p>
						<p className='address-code'>GB-152 - UK </p>
					</article>
				</AddressContainer>

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

				<CancelOrder to='/checkout/delivery'>Back to delivery</CancelOrder>
			</CheckoutMain>
		</>
	);
};

export default Payment;
