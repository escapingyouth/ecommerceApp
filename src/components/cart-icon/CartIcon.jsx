import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import {
	CartIconContainer,
	ShoppingBagIcon,
	ItemCount
} from './cart-icon.styles';

const CartIcon = ({ setMenuOpen }) => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen);
		setMenuOpen(false);
	};
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingBagIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
