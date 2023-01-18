import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart
} from '../../store/cart/cart.action';

import {
	CartItemContainer,
	CartItemDetails,
	ImageContainer,
	QuantityControlContainer,
	QuantityButton
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);

	const { name, primaryImage, price, quantity } = cartItem;

	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

	const removeItemHandler = () =>
		dispatch(removeItemFromCart(cartItems, cartItem));

	const clearItemHandler = () =>
		dispatch(clearItemFromCart(cartItems, cartItem));

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
