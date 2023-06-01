import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.reducer';

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

	const { name, price, primaryImage, secondaryImage } = product;

	const addProductToCart = () => {
		dispatch(addItemToCart(product));
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
						<span className='product-price'>${price}.00</span>
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
