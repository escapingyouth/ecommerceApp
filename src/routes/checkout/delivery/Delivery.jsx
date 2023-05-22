import {
	CheckoutProgress,
	ProgressPoints,
	DeliveryTab,
	PaymentTab,
	ProgressBar,
	OrderSummary,
	OrderDetails
} from '../checkout.styles';

import { DeliveryFormContainer, DeliveryForm } from './delivery.styles';

const Delivery = () => {
	return (
		<>
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
				<h3>Add delivery address</h3>
				<span>* Required fields</span>
				<DeliveryForm></DeliveryForm>
			</DeliveryFormContainer>
		</>
	);
};

export default Delivery;
