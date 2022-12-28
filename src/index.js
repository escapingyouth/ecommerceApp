import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
