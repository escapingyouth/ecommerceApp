import { useContext } from 'react';

import Shoes from './shoes/Shoes';
import Mens from './mens/Mens';
import Womens from './womens/Womens';
import Accessories from './accessories/Accessories';

import { CategoriesContext } from '../../contexts/CategoriesContext';

import {
	ProductsSection,
	ProductsCatalogue,
	LoadingIcon
} from './products.styles';

const Products = () => {
	const { loading } = useContext(CategoriesContext);
	return (
		<>
			<ProductsSection>
				<h1>Featured products</h1>
				{loading ? (
					<LoadingIcon />
				) : (
					<>
						<ProductsCatalogue id='shoes'>
							<Shoes />
						</ProductsCatalogue>
						<ProductsCatalogue id='mens'>
							<Mens />
						</ProductsCatalogue>
						<ProductsCatalogue id='womens'>
							<Womens />
						</ProductsCatalogue>
						<ProductsCatalogue id='accessories'>
							<Accessories />
						</ProductsCatalogue>
					</>
				)}
			</ProductsSection>
		</>
	);
};

export default Products;
