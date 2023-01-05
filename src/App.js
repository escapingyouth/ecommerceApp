import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Checkout from './routes/checkout/Checkout';
import Category from './routes/category/Category';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='checkout' element={<Checkout />} />
					<Route path=':category' element={<Category />} />{' '}
				</Route>
			</Routes>
		</>
	);
};

export default App;
