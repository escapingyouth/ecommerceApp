import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../../contexts/CartContext';

import CheckoutItem from '../../checkout-item/CheckoutItem';
import Button from '../../button/Button';

import './checkout.scss';

const Checkout = () => {
	const { cartItems, cartTotal, cartCount } = useContext(CartContext);

	const navigate = useNavigate();
	const goToHometHandler = () => {
		navigate('/');
	};

	const renderedCheckoutItems = cartItems.map((cartItem) => {
		return <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>;
	});
	return (
		<section className='checkout-section'>
			<h1>Shopping Cart</h1>
			<div className='checkout-container'>
				<div className='cart-details'>
					<div className='checkout-header'>
						<div className='header-block'>
							<span>Product</span>
						</div>
						<div className='header-block'>
							<span>Description</span>
						</div>
						<div className='header-block'>
							<span>Price</span>
						</div>
						<div className='header-block'>
							<span>Qty</span>
						</div>
						<div className='header-block'>
							<span>Total</span>
						</div>
						<div className='header-block'></div>
					</div>
					<div className='checkout-items'>{renderedCheckoutItems}</div>
				</div>
				<div className='order-container'>
					<div className='order-details'>
						<div className='cart-totals-sub'>
							<span className='total-items'>{cartCount} items</span>
							<span className='total-price'> GH₵{cartTotal}</span>
						</div>
						<div className='cart-totals-main'>
							<span className='total-title'>Total</span>
							<span className='total-price'>GH₵{cartTotal}</span>
						</div>
					</div>
					<div className='order-buttons'>
						<Button buttonType='inverted'>Proceed to checkout</Button>
					</div>
				</div>
			</div>
			<Button buttonType='primary' onClick={goToHometHandler}>
				Continue Shopping
			</Button>
		</section>
	);
};

export default Checkout;
