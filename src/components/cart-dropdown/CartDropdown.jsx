import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';

import CloseIcon from '../close-icon/CloseIcon';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import {
	CartDropdownContainer,
	CartDropdownHeader,
	CartItems,
	CartTotals,
	CartButtonsContainer,
	EmptyMessage
} from './cart-dropdown.styles.jsx';

import { ButtonTypeClasses } from '../button/Button';

const CartDropdown = () => {
	const { isCartOpen, setIsCartOpen, cartItems, cartTotal, cartCount } =
		useContext(CartContext);

	const closeCart = () => {
		setIsCartOpen(false);
	};

	const navigate = useNavigate();
	const goToCheckoutHandler = () => {
		navigate('/checkout');
		setIsCartOpen(false);
	};

	const renderedCartItems = cartItems.map((item) => (
		<CartItem key={item.id} cartItem={item}></CartItem>
	));
	return (
		<>
			<CartDropdownContainer isCartOpen={isCartOpen}>
				<CartDropdownHeader>
					<span>Basket</span>
					<CloseIcon className='close-icon' onClick={closeCart} />
				</CartDropdownHeader>
				<CartItems>
					{cartItems.length ? (
						renderedCartItems
					) : (
						<EmptyMessage>Your cart is empty</EmptyMessage>
					)}
				</CartItems>

				<CartTotals>
					<div className='cart-totals-sub'>
						<span className='total-items'>{cartCount} items</span>
						<span className='total-price'> GH₵{cartTotal}</span>
					</div>
					<div className='cart-totals-main'>
						<span className='total-title'>Total</span>
						<span className='total-price'>GH₵{cartTotal}</span>
					</div>
				</CartTotals>
				<CartButtonsContainer>
					<Button buttonType={ButtonTypeClasses.inverted}>Checkout</Button>
					<Button
						buttonType={ButtonTypeClasses.inverted}
						onClick={goToCheckoutHandler}
					>
						Basket
					</Button>
				</CartButtonsContainer>
			</CartDropdownContainer>
		</>
	);
};

export default CartDropdown;
