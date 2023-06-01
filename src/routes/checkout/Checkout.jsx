import { Routes, Route } from 'react-router-dom';

import Delivery from './delivery/Delivery';
import Payment from './payment/Payment';

const Checkout = () => {
	return (
		<>
			<Routes>
				<Route path='/delivery' element={<Delivery />} />
				<Route path='/payment' element={<Payment />} />
			</Routes>
		</>
	);
};

export default Checkout;
