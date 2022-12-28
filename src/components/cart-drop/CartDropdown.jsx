import { ReactComponent as CloseIcon } from '../../assets/svgs/cross.svg';
import './cart-dropdown.scss';

const CartDropdown = () => {
	return (
		<>
			<div className='cart-dropdown-container'>
				<div className='cart-dropdown-header'>
					<span>Basket</span>
					<CloseIcon />
				</div>
			</div>
		</>
	);
};

export default CartDropdown;
