import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
			<div className='cart-item-image-container'>
				<img src={primaryImage} alt={name} />
			</div>
			<div className='cart-item-details'>
				<span className='cart-item-name'>{name}</span>
				<div className='cart-item-quantity-container'>
					<div className='quantity-input-container'>
						<button className='decrement-button' onClick={removeItemHandler}>
							-
						</button>
						<span className='quantity'>{quantity}</span>
						<button className='increment-button' onClick={addItemHandler}>
							+
						</button>
					</div>
					<div className='price-container'>
						<span>x</span>
						<span className='price'>GH₵{price}</span>
					</div>
					<DeleteForeverIcon
						className='delete-icon'
						onClick={clearItemHandler}
					/>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
