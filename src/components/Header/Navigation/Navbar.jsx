import { Link } from 'react-router-dom';
import { useState } from 'react';

import { ReactComponent as Logo } from '../../../assets/svgs/crown.svg';
import './navbar.scss';

import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import AuthBox from '../../modal/AuthBox';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const toggleMenu = (e) => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<nav className='navbar'>
				<div className='logo-container'>
					<Link to='/'>
						<Logo className='logo' />
					</Link>
				</div>
				<ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
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
					<PersonIcon
						fontSize='medium'
						className='person-icon'
						onClick={handleOpen}
					/>
					<ShoppingBagIcon fontSize='medium' className='bag-icon' />
					<div
						className={`hamburger ${menuOpen ? 'active' : ''}`}
						onClick={toggleMenu}
					>
						<span className='bar'></span>
						<span className='bar'></span>
						<span className='bar'></span>
					</div>
				</div>
			</nav>
			<AuthBox open={open} handleClose={handleClose} />
		</>
	);
};

export default Navbar;
