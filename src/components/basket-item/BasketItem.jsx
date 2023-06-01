import { useDispatch } from 'react-redux';

import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart
} from '../../store/cart/cart.reducer';

import CloseIcon from '../close-icon/CloseIcon';

import {
	BasketItemContainer,
	BasketImageContainer,
	ItemDetails,
	ItemTotal
} from './basket-item.styles';

import {
	QuantityButton,
	QuantityControlContainer
} from '../cart-item/cart-item.styles';

const BasketItem = ({ cartItem }) => {
	const dispatch = useDispatch();

	const { name, primaryImage, price, quantity } = cartItem;

	const addItemHandler = () => dispatch(addItemToCart(cartItem));

	const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

	return (
		<BasketItemContainer>
			<BasketImageContainer>
				<img src={primaryImage} alt={name} />
			</BasketImageContainer>
			<ItemDetails>
				<span className='name'>{name}</span>
				<span className='price'>${price}.00</span>
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
		</BasketItemContainer>
	);
};

export default BasketItem;
