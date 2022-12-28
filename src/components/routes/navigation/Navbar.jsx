import { Link, Outlet } from 'react-router-dom';

import { useState, useContext } from 'react';

import { UserContext } from '../../../contexts/UserContext';

import { ReactComponent as Logo } from '../../../assets/svgs/crown.svg';
import './navbar.scss';

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import CartIcon from '../../cart-icon/CartIcon';

import { signOutUser } from '../../../utilities/firebaseConfig';

import ModalBox from '../../modal/ModalBox';
import Auth from '../../auth/Auth';
import CartDropdown from '../../cart-dropdown/CartDropdown';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const toggleMenu = (e) => {
		setMenuOpen(!menuOpen);
	};
	const { currentUser } = useContext(UserContext);

	return (
		<>
			<header>
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
						{currentUser ? (
							<LogoutIcon
								className='sign-out-icon'
								fontSize='medium'
								onClick={signOutUser}
							></LogoutIcon>
						) : (
							<PersonIcon
								fontSize='large'
								className='person-icon'
								onClick={handleOpen}
							/>
						)}

						<CartIcon />
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
				<ModalBox open={open} handleClose={handleClose}>
					<Auth handleClose={handleClose} />
				</ModalBox>
				<CartDropdown />
			</header>
			<Outlet />
		</>
	);
};

export default Navbar;
