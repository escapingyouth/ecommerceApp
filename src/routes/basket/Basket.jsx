import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	selectCartItems,
	selectCartCount,
	selectCartTotal
} from '../../store/cart/cart.selector';

import BasketItem from '../../components/basket-item/BasketItem';
import Button from '../../components/button/Button';
import { ButtonTypeClasses } from '../../components/button/Button';

import {
	BasketSection,
	BasketContainer,
	BasketItems,
	BasketDetails,
	OrderContainer
} from './basket.styles';

const Basket = () => {
	const cartItems = useSelector(selectCartItems);
	const cartCount = useSelector(selectCartCount);
	const cartTotal = useSelector(selectCartTotal);

	const navigate = useNavigate();
	const goToHomeHandler = () => {
		navigate('/');
	};

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

	const renderedBasketItems = cartItems.map((cartItem) => {
		return <BasketItem key={cartItem.id} cartItem={cartItem}></BasketItem>;
	});
	return (
		<BasketSection>
			<h1>Shopping Cart</h1>
			<BasketContainer>
				<BasketDetails>
					<BasketItems>{renderedBasketItems}</BasketItems>
				</BasketDetails>
				<OrderContainer>
					<div className='order-details'>
						<div className='basket-totals-sub'>
							<span className='items'>{cartCount} items</span>
							<span className='price'> ${cartTotal}</span>
						</div>
						<div className='basket-totals-main'>
							<span className='title'>Total</span>
							<span className='price'>${cartTotal}</span>
						</div>
					</div>
					<div className='order-buttons'>
						<Button
							buttonType={ButtonTypeClasses.inverted}
							onClick={goToCheckoutHandler}
						>
							Proceed to checkout
						</Button>
					</div>
				</OrderContainer>
			</BasketContainer>
			<Button buttonType={ButtonTypeClasses.base} onClick={goToHomeHandler}>
				Continue Shopping
			</Button>
		</BasketSection>
	);
};

export default Basket;
