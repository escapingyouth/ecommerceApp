import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { ReactComponent as ProfileSvg } from '../../assets/svgs/profile-icon.svg';
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = styled.header`
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1000;
`;

export const LogoContainer = styled(Link)``;

export const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5em 1em;
	background-color: #000;
	height: 4rem;
`;

export const NavMenu = styled.ul`
	@media only screen and (max-width: 50em) {
		border-top: 2px solid #007bff;
		text-align: left;
		padding: 2em 1.5em;
		position: fixed;
		right: -100%;
		transition: 0.3s ease-in;
		top: 4rem;
		height: 100%;
		width: 50%;
		background-color: #000;
		box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.25);
		${({ isActive }) => isActive && isActiveNavMenu}};
	}
`;

export const NavLink = styled.li`
	display: inline-block;
	position: relative;

	&:not(:last-child) {
		margin-right: 4rem;
	}

	@media only screen and (max-width: 50em) {
		display: block;

		&:not(:last-child) {
			margin: 0;
			margin-bottom: 3rem;
		}
	}
`;

export const NavItem = styled(Link)`
	font-size: 0.9rem;
	text-transform: uppercase;
	color: #fff;
	font-weight: bold;

	&:hover,
	&:active {
		color: #007bff;
	}

	&:hover::after {
		width: 100%;
	}

	&::after {
		content: '';
		display: block;
		position: absolute;
		bottom: -1.3rem;
		height: 3px;
		width: 0%;
		background-color: #007bff;
		transition: all ease-in-out 250ms;
	}

	@media only screen and (max-width: 50em) {
		color: #fff;

		&:hover::before {
			height: 1.5rem;
		}

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: -1.5rem;
			height: 0;
			width: 3px;
			background-color: #007bff;
			transition: all ease-in-out 250ms;
		}

		&::after {
			display: none;
		}
	}
`;

export const RightMenu = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const ProfileIcon = styled(ProfileSvg)`
	color: #fff;
	cursor: pointer;
	width: 1.8rem;
	height: 1.8rem;
`;

export const LogoutIconContainer = styled(LogoutIcon)`
	color: #fff;
	cursor: pointer;
	width: 1.8rem;
	height: 1.8rem;
`;

export const HamburgerMenu = styled.div`
	display: none;
	cursor: pointer;

	@media only screen and (max-width: 50em) {
		& {
			display: block;
		}

		${({ isActive }) => isActive && isActiveHamburgerMenu}
	}
`;

export const HamburgerBar = styled.span`
	display: block;
	width: 1.8rem;
	height: 0.1rem;
	margin: 0.4rem auto;
	transition: all 0.3s ease-in-out;
	background-color: white;
`;

const isActiveNavMenu = css`
	right: 0;
`;

const isActiveHamburgerMenu = css`
	${HamburgerBar}:nth-child(2) {
		opacity: 0;
	}
	${HamburgerBar}:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}
	${HamburgerBar}:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}
`;
