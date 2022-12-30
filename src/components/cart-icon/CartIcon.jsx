import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import { ReactComponent as ShoppingBagIcon } from '../../assets/svgs/bag-icon.svg';

import './cart-icon.scss';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
		<div className='cart-icon-container' onClick={toggleIsCartOpen}>
			<ShoppingBagIcon className='bag-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
};

export default CartIcon;
