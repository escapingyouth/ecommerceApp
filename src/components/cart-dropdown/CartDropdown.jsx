import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	selectIsCartOpen,
	selectCartItems,
	selectCartCount,
	selectCartTotal
} from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.reducer';

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
	const dispatch = useDispatch();

	const isCartOpen = useSelector(selectIsCartOpen);
	const cartItems = useSelector(selectCartItems);
	const cartCount = useSelector(selectCartCount);
	const cartTotal = useSelector(selectCartTotal);

	const closeCart = () => {
		dispatch(setIsCartOpen(false));
	};

	const navigate = useNavigate();

	const goToBasketHandler = () => {
		navigate('/basket');
		dispatch(setIsCartOpen(false));
		window.scrollTo(0, 0);
	};

	const goToCheckoutHandler = () => {
		navigate('/checkout/delivery');
		dispatch(setIsCartOpen(false));
		window.scrollTo(0, 0);
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
						<span className='total-price'> ${cartTotal}.00</span>
					</div>
					<div className='cart-totals-main'>
						<span className='total-title'>Total</span>
						<span className='total-price'>${cartTotal}.00</span>
					</div>
				</CartTotals>
				<CartButtonsContainer>
					<Button
						buttonType={ButtonTypeClasses.inverted}
						onClick={goToCheckoutHandler}
					>
						Checkout
					</Button>
					<Button
						buttonType={ButtonTypeClasses.inverted}
						onClick={goToBasketHandler}
					>
						Basket
					</Button>
				</CartButtonsContainer>
			</CartDropdownContainer>
		</>
	);
};

export default CartDropdown;
