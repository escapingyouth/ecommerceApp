import { Routes, Route } from 'react-router-dom';

import Delivery from './delivery/Delivery';
import Payment from './payment/Payment';

import {
	CheckoutHeader,
	PadlockIcon,
	LogoIcon,
	PhoneIcon,
	CheckoutMain
} from './checkout.styles';

const Checkout = () => {
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
				<Routes>
					<Route path='/delivery' element={<Delivery />} />
					<Route path='/payment' element={<Payment />} />
				</Routes>
			</CheckoutMain>
		</>
	);
};

export default Checkout;
