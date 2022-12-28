import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import './quantity-input.scss';

const QuantityInput = ({ quantity, cartItem }) => {
	const { addItemToCart, removeItemFromCart } = useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);
	return (
		<>
			<div className='quantity-input-container'>
				<button className='decrement-button' onClick={removeItemHandler}>
					-
				</button>
				<span className='quantity'>{quantity}</span>
				<button className='increment-button' onClick={addItemHandler}>
					+
				</button>
			</div>
		</>
	);
};

export default QuantityInput;
