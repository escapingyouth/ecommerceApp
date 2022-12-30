import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import { ReactComponent as CrossIcon } from '../../assets/svgs/cross.svg';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, primaryImage, price, quantity } = cartItem;

	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);

	const clearItemHandler = () => clearItemFromCart(cartItem);
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={primaryImage} alt={name} />
			</div>
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>GH₵{price}</span>
				<div className='quantity-control-container'>
					<button className='decrement-button' onClick={removeItemHandler}>
						-
					</button>
					<span className='quantity'>{quantity}</span>
					<button className='increment-button' onClick={addItemHandler}>
						+
					</button>
				</div>
			</div>

			<div className='item-total'>
				<CrossIcon onClick={clearItemHandler} className='clear' />
				<span>GH₵{price * quantity}</span>
			</div>
		</div>
	);
};

export default CheckoutItem;
