import { useSelector } from 'react-redux';
import Shoes from './shoes/Shoes';
import Mens from './mens/Mens';
import Womens from './womens/Womens';
import Accessories from './accessories/Accessories';

import { ProductsSection, ProductsCatalogue } from './products.styles';

import Spinner from '../spinner/Spinner';

import { selectIsLoading } from '../../store/categories/categories.selector';

const Products = () => {
	const isLoading = useSelector(selectIsLoading);

	return (
		<>
			<ProductsSection>
				<h1>Featured products</h1>
				{isLoading ? (
					<Spinner />
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
