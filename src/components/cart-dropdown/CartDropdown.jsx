import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '../../assets/svgs/cross.svg';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/CartContext';
import './cart-dropdown.scss';

const CartDropdown = () => {
	const { isCartOpen, setIsCartOpen, cartItems, cartTotal, cartCount } =
		useContext(CartContext);

	const closeCart = () => {
		setIsCartOpen(false);
	};

	const navigate = useNavigate();
	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};
	return (
		<>
			<div className={`cart-dropdown-container ${isCartOpen ? 'active' : ''}`}>
				<div className='cart-dropdown-header'>
					<span>Basket</span>
					<CloseIcon className='close-icon' onClick={closeCart} />
				</div>
				<div className='cart-items'>
					{cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item}></CartItem>
					))}
				</div>

				<div className='cart-totals'>
					<div className='cart-totals-sub'>
						<span className='total-items'>{cartCount} items</span>
						<span className='total-price'> GH₵{cartTotal}</span>
					</div>
					<div className='cart-totals-main'>
						<span className='total-title'>Total</span>
						<span className='total-price'>GH₵{cartTotal}</span>
					</div>
				</div>
				<div className='cart-buttons'>
					<Button buttonType='inverted'>Checkout</Button>
					<Button buttonType='inverted' onClick={goToCheckoutHandler}>
						Basket
					</Button>
				</div>
			</div>
		</>
	);
};

export default CartDropdown;
