import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { checkUserSession } from './store/user/user.action';

import { fetchCategoriesStart } from './store/categories/categories.reducer';

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Checkout from './routes/checkout/Checkout';
import Category from './routes/category/Category';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, []);

	useEffect(() => {
		dispatch(fetchCategoriesStart());
	}, []);

	return (
		<>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='checkout' element={<Checkout />} />
					<Route path=':category' element={<Category />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
