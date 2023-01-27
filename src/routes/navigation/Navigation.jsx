import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/svgs/crown.svg';
import CartIcon from '../../components/cart-icon/CartIcon';

import ModalBox from '../../components/modal/ModalBox';
import Auth from '../../components/auth/Auth';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';

import { signOutStart } from '../../store/user/user.action';

import selectCurrentUser from '../../store/user/user.selector';

import {
	Header,
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
			<Header>
				<NavBar>
					<LogoContainer to='/'>
						<Logo />
					</LogoContainer>

					<NavMenu isActive={menuOpen}>
						<NavLink>
							<NavItem to='/mens'>Men</NavItem>
						</NavLink>
						<NavLink>
							<NavItem to='/womens'>Women</NavItem>
						</NavLink>
						<NavLink>
							<NavItem to='/kids'>Kids</NavItem>
						</NavLink>
						<NavLink>
							<NavItem to='/shoes'>Shoes</NavItem>
						</NavLink>
						<NavLink>
							<NavItem to='/beauty'>Beauty</NavItem>
						</NavLink>
						<NavLink>
							<NavItem to='/accessories'>Accessories</NavItem>
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
			</Header>
			<Outlet />
		</>
	);
};

export default Navigation;
