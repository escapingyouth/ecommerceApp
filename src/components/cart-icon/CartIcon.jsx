import { useSelector, useDispatch } from 'react-redux';

import {
	selectIsCartOpen,
	selectCartCount
} from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.action';

import {
	CartIconContainer,
	ShoppingBagIcon,
	ItemCount
} from './cart-icon.styles';

const CartIcon = ({ setMenuOpen }) => {
	const dispatch = useDispatch();

	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);

	const toggleIsCartOpen = () => {
		dispatch(setIsCartOpen(!isCartOpen));
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
