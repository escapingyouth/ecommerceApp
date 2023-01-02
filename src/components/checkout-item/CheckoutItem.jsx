import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import CloseIcon from '../close-icon/CloseIcon';

import {
	CheckoutItemContainer,
	CheckoutImageContainer,
	ItemDetails,
	ItemTotal
} from './checkout-item.styles';
import {
	QuantityButton,
	QuantityControlContainer
} from '../cart-item/cart-item.styles';

const CheckoutItem = ({ cartItem }) => {
	const { name, primaryImage, price, quantity } = cartItem;

	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);

	const clearItemHandler = () => clearItemFromCart(cartItem);
	return (
		<CheckoutItemContainer>
			<CheckoutImageContainer>
				<img src={primaryImage} alt={name} />
			</CheckoutImageContainer>
			<ItemDetails>
				<span className='name'>{name}</span>
				<span className='price'>GH₵{price}</span>
				<QuantityControlContainer>
					<QuantityButton onClick={removeItemHandler}>-</QuantityButton>
					<span className='quantity'>{quantity}</span>
					<QuantityButton onClick={addItemHandler}>+</QuantityButton>
				</QuantityControlContainer>
			</ItemDetails>

			<ItemTotal>
				<CloseIcon onClick={clearItemHandler} />
				<span>GH₵{price * quantity}</span>
			</ItemTotal>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
