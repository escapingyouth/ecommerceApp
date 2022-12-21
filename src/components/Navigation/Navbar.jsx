import { Link } from 'react-router-dom';
import { useRef } from 'react';

import { ReactComponent as Logo } from '../../assets/svgs/crown.svg';
import './navbar.scss';

import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Navbar = () => {
	const navRef = useRef();

	const handleShowNavMenu = (e) => {
		e.target.classList.toggle('active');
		navRef.current.classList.toggle('active');
	};
	return (
		<nav className='navbar'>
			<div className='logo-container'>
				<Link to='/'>
					<Logo className='logo' />
				</Link>
			</div>
			<ul className='nav-menu' ref={navRef}>
				<li className='nav-link'>
					<Link className='nav-item' to='/womens'>
						Womens
					</Link>
				</li>
				<li className='nav-link'>
					<Link className='nav-item' to='/mens'>
						Mens
					</Link>
				</li>
				<li className='nav-link'>
					<Link className='nav-item' to='/shoes'>
						Shoes
					</Link>
				</li>
				<li className='nav-link'>
					<Link className='nav-item' to='/beauty'>
						Beauty
					</Link>
				</li>
				<li className='nav-link'>
					<Link className='nav-item' to='/accessories'>
						Accessories
					</Link>
				</li>
			</ul>
			<div className='right-menu'>
				<PersonIcon fontSize='medium' className='person-icon' />
				<ShoppingBagIcon fontSize='medium' className='bag-icon' />
				<div className='hamburger' onClick={handleShowNavMenu}>
					<span className='bar'></span>
					<span className='bar'></span>
					<span className='bar'></span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
