import { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';

import { ReactComponent as Logo } from '../../assets/svgs/crown.svg';
import CartIcon from '../../components/cart-icon/CartIcon';

import ModalBox from '../../components/modal/ModalBox';
import Auth from '../../components/auth/Auth';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';

import { signOutUser } from '../../utilities/firebase/firebaseConfig';

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
