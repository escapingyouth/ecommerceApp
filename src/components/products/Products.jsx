import Shoes from './shoes/Shoes';
import Mens from './mens/Mens';
import Womens from './womens/Womens';
import './products.scss';

const Products = () => {
	return (
		<>
			<section className='products'>
				<h1 className='products-title'>Featured products</h1>

				<div className='products-catalogue shoes'>
					<Shoes />
				</div>
				<div className='products-catalogue mens'>
					<Mens />
				</div>
				<div className='products-catalogue womens'>
					<Womens />
				</div>
			</section>
		</>
	);
};

export default Products;
