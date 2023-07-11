import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { checkUserSession } from './store/user/user.action';

import { fetchCategoriesStart } from './store/categories/categories.reducer';

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Basket from './routes/basket/Basket';
import Checkout from './routes/checkout/Checkout';
import Category from './routes/category/Category';

import Preloader from './components/preloader/Preloader';

const App = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 700000000);

		return () => clearTimeout(timeoutId);
	}, []);

	useEffect(() => {
		dispatch(checkUserSession());
	}, []);

	useEffect(() => {
		dispatch(fetchCategoriesStart());
	}, []);

	return (
		<>
			{isLoading ? (
				<Preloader />
			) : (
				<Routes>
					<Route path='/' element={<Navigation />}>
						<Route index element={<Home />} />
						<Route path='basket' element={<Basket />} />
						<Route path='collection/:category' element={<Category />} />
					</Route>
					<Route path='checkout/*' element={<Checkout />} />
				</Routes>
			)}
		</>
	);
};

export default App;
