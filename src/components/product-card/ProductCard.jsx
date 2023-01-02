import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import { ReactComponent as ShoppingBagIcon } from '../../assets/svgs/bag-icon.svg';

import {
	ProductContainer,
	ProductDetails,
	ProductDetailsContainer,
	ProductIconContainer,
	ProductImage,
	ProductImageContainer,
	ProductImageHover
} from './product-card..styles';
const ProductCard = ({ product }) => {
	const { setIsCartOpen, addItemToCart } = useContext(CartContext);
	const { name, price, primaryImage, secondaryImage } = product;

	const addProductToCart = () => {
		addItemToCart(product);
		setIsCartOpen(true);
	};
	return (
		<>
			<ProductContainer>
				<ProductImageContainer>
					<ProductImage src={primaryImage} alt='shoe' />
					<ProductImageHover src={secondaryImage} alt='shoe' />
				</ProductImageContainer>
				<ProductDetailsContainer>
					<ProductDetails>
						<h3 className='product-name'>{name}</h3>
						<span className='product-price'>GH₵{price}</span>
					</ProductDetails>
					<ProductIconContainer onClick={addProductToCart}>
						<ShoppingBagIcon />
					</ProductIconContainer>
				</ProductDetailsContainer>
			</ProductContainer>
		</>
	);
};

export default ProductCard;
