import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../../components/footer/Footer';

import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../../components/product-card/ProductCard';

import {
	CategoryContainer,
	CategoryLinkContainer,
	CategoryLink,
	FilterContainer,
	CategoryProducts
} from './category.styles';

const Category = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	const { category } = useParams();

	const [products, setProducts] = useState(categoriesMap[category]);
	const [filteredProducts, setFilteredProducts] = useState(products);

	const [searchProduct, setSearchProduct] = useState('');

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	useEffect(() => {
		const newFilteredProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchProduct)
		);
		setFilteredProducts(newFilteredProducts);
	}, [searchProduct, products]);

	const handleChange = (e) => {
		setSearchProduct(e.target.value.toLowerCase());
	};
	let content;
	switch (category) {
		case 'mens':
			content = (
				<p>
					Find what fits the king you are. Checkout our collection of men's
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
					<CategoryLink to={`/${category}`}> / {category}</CategoryLink>
				</CategoryLinkContainer>
				<h1>{category}</h1>
				{content}
				<FilterContainer>
					<input
						type='search'
						placeholder='search product'
						onChange={handleChange}
						value={searchProduct}
					/>
				</FilterContainer>

				<CategoryProducts>
					{filteredProducts &&
						filteredProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</CategoryProducts>
			</CategoryContainer>

			<Footer />
		</>
	);
};

export default Category;