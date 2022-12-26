import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './cart-icon.scss';

const CartIcon = () => {
	return (
		<div className='cart-icon-container'>
			<ShoppingBagIcon fontSize='medium' className='bag-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};

export default CartIcon;
