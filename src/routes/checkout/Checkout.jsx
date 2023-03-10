import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	selectCartItems,
	selectCartCount,
	selectCartTotal
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import Button from '../../components/button/Button';
import { ButtonTypeClasses } from '../../components/button/Button';

import {
	CheckoutSection,
	CheckoutContainer,
	CheckoutItems,
	CartDetails,
	OrderContainer
} from './checkout.styles';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartCount = useSelector(selectCartCount);
	const cartTotal = useSelector(selectCartTotal);

	const navigate = useNavigate();
	const goToHometHandler = () => {
		navigate('/');
	};

	const renderedCheckoutItems = cartItems.map((cartItem) => {
		return <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>;
	});
	return (
		<CheckoutSection>
			<h1>Shopping Cart</h1>
			<CheckoutContainer>
				<CartDetails>
					<CheckoutItems>{renderedCheckoutItems}</CheckoutItems>
				</CartDetails>
				<OrderContainer>
					<div className='order-details'>
						<div className='cart-totals-sub'>
							<span className='items'>{cartCount} items</span>
							<span className='price'> ${cartTotal}</span>
						</div>
						<div className='cart-totals-main'>
							<span className='title'>Total</span>
							<span className='price'>${cartTotal}</span>
						</div>
					</div>
					<div className='order-buttons'>
						<Button buttonType={ButtonTypeClasses.inverted}>
							Proceed to checkout
						</Button>
					</div>
				</OrderContainer>
			</CheckoutContainer>
			<Button buttonType={ButtonTypeClasses.base} onClick={goToHometHandler}>
				Continue Shopping
			</Button>
		</CheckoutSection>
	);
};

export default Checkout;
