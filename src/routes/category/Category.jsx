import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

import ProductCard from '../../components/product-card/ProductCard';
import Footer from '../../components/footer/Footer';

import {
	CategoryContainer,
	CategoryLinkContainer,
	CategoryLink,
	CategoryProducts
} from './category.styles';

const Category = () => {
	const { category } = useParams();

	const categoriesMap = useSelector(selectCategoriesMap);

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	let content;
	switch (category) {
		case 'mens':
			content = (
				<p>
					Find what fits the king you are. Check out our collection of men's
					clothing
				</p>
			);
			break;
		case 'womens':
			content = (
				<p>
					Looking for clothes to pull off that majestic look? Look no further
					stylish queens
				</p>
			);
			break;
		case 'kids':
			content = (
				<p>
					From playtime to special occasions, we have the perfect kids' clothing
					for every occasion
				</p>
			);
			break;
		case 'beauty':
			content = (
				<p>Elevate your beauty routine with our curated selection of makeup</p>
			);
			break;
		default:
			content = (
				<p>
					Stay on trend with our constantly updated selection of the latest and
					best {category}
				</p>
			);
	}
	return (
		<>
			<CategoryContainer>
				<CategoryLinkContainer>
					<CategoryLink to='/'>Home</CategoryLink>
					<span> / </span>
					<CategoryLink to={`/collection/${category}`}>{category}</CategoryLink>
				</CategoryLinkContainer>
				<h1>{category}</h1>
				{content}

				<CategoryProducts>
					{products &&
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</CategoryProducts>
			</CategoryContainer>

			<Footer />
		</>
	);
};

export default Category;
