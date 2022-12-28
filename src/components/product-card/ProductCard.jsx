import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import './product-card.scss';

const ProductCard = ({ product }) => {
	const { setIsCartOpen, addItemToCart } = useContext(CartContext);
	const { name, price, primaryImage, secondaryImage } = product;

	const addProductToCart = () => {
		addItemToCart(product);
		setIsCartOpen(true);
	};
	return (
		<>
			<article className='product-container'>
				<figure className='product-image-container'>
					<img src={primaryImage} alt='shoe' className='product-image' />
					<img
						src={secondaryImage}
						alt='shoe'
						className='product-image image-hover'
					/>
				</figure>
				<div className='product-details-container'>
					<div className='product-details'>
						<h3 className='product-name'>{name}</h3>
						<span className='product-price'>GH₵{price}</span>
					</div>
					<div className='product-icon-container' onClick={addProductToCart}>
						<ShoppingBagIcon fontSize='medium' className='product-icon' />
					</div>
				</div>
			</article>
		</>
	);
};

export default ProductCard;
