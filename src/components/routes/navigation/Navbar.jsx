import { useState, useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { UserContext } from '../../../contexts/UserContext';

import { ReactComponent as Logo } from '../../../assets/svgs/crown.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/svgs/profile-icon.svg';
import CartIcon from '../../cart-icon/CartIcon';
import LogoutIcon from '@mui/icons-material/Logout';

import ModalBox from '../../modal/ModalBox';
import Auth from '../../auth/Auth';
import CartDropdown from '../../cart-dropdown/CartDropdown';

import { signOutUser } from '../../../utilities/firebase/firebaseConfig';

import './navbar.scss';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const toggleMenu = (e) => {
		setMenuOpen(!menuOpen);
	};
	const { currentUser } = useContext(UserContext);

	useEffect(() => {
		function handleClick(event) {
			toggleMenu();
		}
		// document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});

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
								Women
							</Link>
						</li>
						<li className='nav-link'>
							<Link className='nav-item' to='/mens'>
								Men
							</Link>
						</li>
						<li className='nav-link'>
							<Link className='nav-item' to='/kids'>
								Kids
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
								onClick={signOutUser}
							></LogoutIcon>
						) : (
							<ProfileIcon className='profile-icon' onClick={handleOpen} />
						)}

						<CartIcon setMenuOpen={setMenuOpen} />
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
