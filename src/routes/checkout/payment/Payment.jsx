import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
	useStripe,
	useElements
} from '@stripe/react-stripe-js';

import {
	selectCartCount,
	selectCartTotal
} from '../../../store/cart/cart.selector';

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
	AddressContainer,
	PaymentButton
} from './payment.styles';

const Payment = () => {
	const stripe = useStripe();
	const elements = useElements();

	const cartCount = useSelector(selectCartCount);
	const cartTotal = useSelector(selectCartTotal);

	const deliveryTotal = 20;
	const taxTotal = 0;
	const amount = cartTotal + deliveryTotal + taxTotal;

	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	const paymentHandler = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setIsProcessingPayment(true);

		const response = await fetch('/api/create-payment-intent', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ amount: amount * 100 })
		}).then((res) => res.json());

		const {
			paymentIntent: { client_secret }
		} = response;

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardNumberElement),
				billing_details: {
					name: e.target.cardholderName.value
				}
			}
		});

		setIsProcessingPayment(false);
		if (paymentResult.error) {
			alert(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful');
			}
		}
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
				<PaymentFormContainer>
					<h3>Card Details</h3>

					<PaymentForm onSubmit={paymentHandler}>
						<CardHolderInputContainer>
							<div className='card-holder-input'>
								<label htmlFor='cardholderName'>Cardholder name</label>
								<input type='text' name='cardholderName' required />
							</div>
						</CardHolderInputContainer>
						<CardInputContainer>
							<div className='card-number-input'>
								<label htmlFor='cardNumber'>Card number</label>
								<CardNumberElement className='stripe-input-element' />
							</div>

							<div className='expiration-date-input'>
								<label htmlFor='expirationDate'>Expiration date</label>
								<CardExpiryElement className='stripe-input-element' />
							</div>
						</CardInputContainer>

						<SecurityCodeInputContainer>
							<div className='security-code-input'>
								<label htmlFor='securityCode'>Security code</label>
								<CardCvcElement className='stripe-input-element' />
							</div>
						</SecurityCodeInputContainer>
						<PaymentButton
							buttonType={ButtonTypeClasses.base}
							type='submit'
							isLoading={isProcessingPayment}
						>
							Pay Now
						</PaymentButton>
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
							<span>${amount}.00</span>
						</OrderTotal>
					</OrderBox>
				</OrderBoxContainer>

				<CancelOrder to='/checkout/delivery'>Back to delivery</CancelOrder>
			</CheckoutMain>
		</>
	);
};

export default Payment;
