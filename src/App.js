import { Routes, Route } from 'react-router-dom';

import Navbar from './components/routes/navigation/Navbar';
import Home from './components/routes/home/Home';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<Home />} />
					{/* <Route path='checkout' element={<Checkout />} /> */}
				</Route>
			</Routes>
		</>
	);
};

export default App;
