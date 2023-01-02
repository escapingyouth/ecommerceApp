import {
	ShopCardContainer,
	ShopCardContent,
	ShopCardText,
	ShopLink
} from './shop-card.styles';
import './shop-card.scss';

const ShopCard = () => {
	return (
		<>
			<ShopCardContainer>
				<ShopCardContent className='shop-womens'>
					<ShopCardText>
						<h3>Women's collection</h3>
						<ShopLink to='/womens'>Shop women's</ShopLink>
					</ShopCardText>
				</ShopCardContent>
				<ShopCardContent className='shop-mens'>
					<ShopCardText>
						<h3>Men's collection</h3>
						<ShopLink to='/mens'>Shop men's</ShopLink>
					</ShopCardText>
				</ShopCardContent>
				<ShopCardContent className='shop-kids'>
					<ShopCardText>
						<h3>Junior collection</h3>
						<ShopLink to='/kids'>Shop kid's</ShopLink>
					</ShopCardText>
				</ShopCardContent>
				<ShopCardContent className='shop-shoes'>
					<ShopCardText>
						<h3>Shoes collection</h3>
						<ShopLink to='/shoes'>Shop shoes</ShopLink>
					</ShopCardText>
				</ShopCardContent>
				<ShopCardContent className='shop-beauty'>
					<ShopCardText>
						<h3>Beauty collection</h3>
						<ShopLink to='/beauty'>Shop beauty</ShopLink>
					</ShopCardText>
				</ShopCardContent>
				<ShopCardContent className='shop-accessories'>
					<ShopCardText>
						<h3>Accessories collection</h3>
						<ShopLink to='/accessories'>Shop accessories</ShopLink>
					</ShopCardText>
				</ShopCardContent>
			</ShopCardContainer>
		</>
	);
};

export default ShopCard;
