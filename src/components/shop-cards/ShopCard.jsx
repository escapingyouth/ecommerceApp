import { Link } from 'react-router-dom';

import './shop-card.scss';

const ShopCard = () => {
	return (
		<>
			<section className='shop-card-container'>
				<div className='shop-card womens'>
					<div className='shop-card-text'>
						<h3>Women's collection</h3>
						<Link to='/womens' className='shop-link'>
							Shop women's
						</Link>
					</div>
				</div>
				<div className='shop-card mens'>
					<div className='shop-card-text'>
						<h3>Men's collection</h3>
						<Link to='/mens' className='shop-link'>
							Shop men's
						</Link>
					</div>
				</div>
				<div className='shop-card kids'>
					<div className='shop-card-text'>
						<h3>Junior collection</h3>
						<Link to='/kids' className='shop-link'>
							Shop kid's
						</Link>
					</div>
				</div>
				<div className='shop-card shoes'>
					<div className='shop-card-text'>
						<h3>Shoes collection</h3>
						<Link to='/shoes' className='shop-link'>
							Shop shoes
						</Link>
					</div>
				</div>
				<div className='shop-card beauty'>
					<div className='shop-card-text'>
						<h3>Beauty collection</h3>
						<Link to='/beauty' className='shop-link'>
							Shop beauty
						</Link>
					</div>
				</div>
				<div className='shop-card accessories'>
					<div className='shop-card-text'>
						<h3>Accessories collection</h3>
						<Link to='/accessories' className='shop-link'>
							Shop accessories
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default ShopCard;
