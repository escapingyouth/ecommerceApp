import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './cart-icon.scss';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
		<div className='cart-icon-container' onClick={toggleIsCartOpen}>
			<ShoppingBagIcon fontSize='medium' className='bag-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
};

export default CartIcon;
