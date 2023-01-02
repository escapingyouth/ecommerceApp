import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import {
	CartItemContainer,
	CartItemDetails,
	ImageContainer,
	QuantityControlContainer,
	QuantityButton
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
	const { name, primaryImage, price, quantity } = cartItem;
	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);

	const clearItemHandler = () => clearItemFromCart(cartItem);
	return (
		<CartItemContainer>
			<ImageContainer>
				<img src={primaryImage} alt={name} />
			</ImageContainer>
			<CartItemDetails>
				<h3 className='name'>{name}</h3>
				<span className='price'>GH₵{price}.00</span>
				<span className='remove' onClick={clearItemHandler}>
					Remove
				</span>
			</CartItemDetails>
			<QuantityControlContainer>
				<QuantityButton onClick={removeItemHandler}>-</QuantityButton>
				<span className='quantity'>{quantity}</span>
				<QuantityButton onClick={addItemHandler}>+</QuantityButton>
			</QuantityControlContainer>
		</CartItemContainer>
	);
};

export default CartItem;
