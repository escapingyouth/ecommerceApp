import { Routes, Route } from 'react-router-dom';

import Delivery from './delivery/Delivery';
import Payment from './payment/Payment';

import { DeliveryFormProvider } from '../../context/DeliveryFormContext';

const Checkout = () => {
	return (
		<>
			<DeliveryFormProvider>
				<Routes>
					<Route path='/delivery' element={<Delivery />} />
					<Route path='/payment' element={<Payment />} />
				</Routes>
			</DeliveryFormProvider>
		</>
	);
};

export default Checkout;
