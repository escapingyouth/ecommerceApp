import { useDispatch } from 'react-redux';

import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart
} from '../../store/cart/cart.reducer';

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
	const dispatch = useDispatch();

	const { name, primaryImage, price, quantity } = cartItem;

	const addItemHandler = () => dispatch(addItemToCart(cartItem));

	const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

	return (
		<CheckoutItemContainer>
			<CheckoutImageContainer>
				<img src={primaryImage} alt={name} />
			</CheckoutImageContainer>
			<ItemDetails>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
				<QuantityControlContainer>
					<QuantityButton onClick={removeItemHandler}>-</QuantityButton>
					<span className='quantity'>{quantity}</span>
					<QuantityButton onClick={addItemHandler}>+</QuantityButton>
				</QuantityControlContainer>
			</ItemDetails>

			<ItemTotal>
				<CloseIcon onClick={clearItemHandler} />
				<span>${price * quantity}</span>
			</ItemTotal>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
