import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import CartIcon from '../../components/cart-icon/CartIcon';

import ModalBox from '../../components/modal/ModalBox';
import Auth from '../../components/auth/Auth';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';

import { signOutStart } from '../../store/user/user.action';

import selectCurrentUser from '../../store/user/user.selector';

import {
	NavHeader,
	NavBar,
	NavMenu,
	NavLink,
	NavItem,
	RightMenu,
	ProfileIcon,
	LogoContainer,
	LogoutIconContainer,
	HamburgerMenu,
	HamburgerBar
} from './navigation.styles.jsx';

const Navigation = () => {
	const dispatch = useDispatch();

	const [menuOpen, setMenuOpen] = useState(false);
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const toggleMenu = (e) => {
		setMenuOpen(!menuOpen);
	};

	const currentUser = useSelector(selectCurrentUser);

	const signOutUser = () => dispatch(signOutStart());

	return (
		<>
			<NavHeader>
				<NavBar>
					<LogoContainer to='/'>
						<Logo />
					</LogoContainer>

					<NavMenu isActive={menuOpen}>
						<NavLink>
							<NavItem to='/collection/mens'>Men</NavItem>
						</NavLink>
						<NavLink>
							<NavItem to='/collection/womens'>Women</NavItem>
						</NavLink>
						<NavLink>
							<NavItem to='/collection/kids'>Kids</NavItem>
						</NavLink>
						<NavLink>
							<NavItem to='/collection/shoes'>Shoes</NavItem>
						</NavLink>
						<NavLink>
							<NavItem to='/collection/beauty'>Beauty</NavItem>
						</NavLink>
						<NavLink>
							<NavItem to='/collection/accessories'>Accessories</NavItem>
						</NavLink>
					</NavMenu>
					<RightMenu>
						{currentUser ? (
							<LogoutIconContainer onClick={signOutUser}></LogoutIconContainer>
						) : (
							<ProfileIcon onClick={handleOpen} />
						)}

						<CartIcon setMenuOpen={setMenuOpen} />
						<HamburgerMenu isActive={menuOpen} onClick={toggleMenu}>
							<HamburgerBar></HamburgerBar>
							<HamburgerBar></HamburgerBar>
							<HamburgerBar></HamburgerBar>
						</HamburgerMenu>
					</RightMenu>
				</NavBar>
				<ModalBox open={open} handleClose={handleClose}>
					<Auth handleClose={handleClose} />
				</ModalBox>
				<CartDropdown />
			</NavHeader>
			<Outlet />
		</>
	);
};

export default Navigation;
