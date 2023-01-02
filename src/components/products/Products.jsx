import Shoes from './shoes/Shoes';
import Mens from './mens/Mens';
import Womens from './womens/Womens';
import Accessories from './accessories/Accessories';

import { ProductsSection, ProductsCatalogue } from './products.styles';

const Products = () => {
	return (
		<>
			<ProductsSection>
				<h1 className='products-title'>Featured products</h1>

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
			</ProductsSection>
		</>
	);
};

export default Products;
