import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import './product-card.scss';

const ProductCard = ({ shoe }) => {
	const { name, price, primaryImage, secondaryImage } = shoe;
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
						<span className='product-price'>{price}</span>
					</div>
					<div className='product-icon-container'>
						<ShoppingBagIcon fontSize='medium' className='product-icon' />
					</div>
				</div>
			</article>
		</>
	);
};

export default ProductCard;
