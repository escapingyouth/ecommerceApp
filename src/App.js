import { Routes, Route } from 'react-router-dom';

import Navigation from './components/routes/navigation/Navigation';
import Home from './components/routes/home/Home';
import Checkout from './components/routes/checkout/Checkout';
const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='checkout' element={<Checkout />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
