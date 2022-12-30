import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import './cart-item.scss';

const CartItem = ({ cartItem }) => {
	const { name, primaryImage, price, quantity } = cartItem;
	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);

	const clearItemHandler = () => clearItemFromCart(cartItem);
	return (
		<div className='cart-item-container'>
			<div className='image-container'>
				<img src={primaryImage} alt={name} />
			</div>
			<div className='cart-item-details'>
				<h3 className='name'>{name}</h3>
				<span className='price'>GH₵{price}.00</span>
				<span className='remove' onClick={clearItemHandler}>
					Remove
				</span>
			</div>
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
	);
};

export default CartItem;
