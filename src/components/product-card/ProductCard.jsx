import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import { addItemToCart } from '../../store/cart/cart.action';

import { ReactComponent as ShoppingBagIcon } from '../../assets/svgs/bag-icon.svg';

import {
	ProductContainer,
	ProductDetails,
	ProductDetailsContainer,
	ProductIconContainer,
	ProductImage,
	ProductImageContainer,
	ProductImageHover
} from './product-card.styles';

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);

	const { name, price, primaryImage, secondaryImage } = product;

	const addProductToCart = () => {
		dispatch(addItemToCart(cartItems, product));
	};

	return (
		<>
			<ProductContainer>
				<ProductImageContainer>
					<ProductImage src={primaryImage} loading='lazy' alt={name} />
					<ProductImageHover src={secondaryImage} loading='lazy' alt={name} />
				</ProductImageContainer>
				<ProductDetailsContainer>
					<ProductDetails>
						<h3 className='product-name'>{name}</h3>
						<span className='product-price'>GH₵{price}</span>
					</ProductDetails>
				</ProductDetailsContainer>
				<ProductIconContainer onClick={addProductToCart}>
					<ShoppingBagIcon />
				</ProductIconContainer>
			</ProductContainer>
		</>
	);
};

export default ProductCard;
