import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener
} from './utilities/firebase/firebaseConfig';

import setCurrentUser from './store/user/user.action';

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Checkout from './routes/checkout/Checkout';
import Category from './routes/category/Category';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});

		return unsubscribe;
	}, [dispatch]);

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
