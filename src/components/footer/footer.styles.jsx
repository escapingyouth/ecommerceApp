import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
	background-color: #000;
	color: #fff;
	padding: 5em;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 34em) {
		padding: 4em 2em;
		font-size: 0.8rem;
	}
`;

export const FooterNav = styled.nav`
	display: flex;
	align-items: flex-start;
	justify-content: space-around;

	h3 {
		margin-bottom: 1rem;
	}

	@media screen and (max-width: 50em) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const FooterContent = styled.div`
	height: 100%;
	width: 50%;

	p {
		line-height: 1.5rem;
		text-align: justify;
		margin-bottom: 2rem;
	}
	@media screen and (max-width: 50em) {
		width: 100%;

		p {
			margin-bottom: 3rem;
		}
	}
`;
export const FooterList = styled.ul`
	@media screen and (max-width: 50em) {
		margin-top: 2rem;
	}
`;

export const FooterLinksContainer = styled(Link)`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 50em) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;
export const FooterLink = styled(Link)`
	color: #fff;

	&:hover {
		color: #007bff;
	}

	&:not(:last-child) {
		margin-bottom: 0.6rem;
	}

	@media screen and (max-width: 50em) {
		&:not(:last-child) {
			margin-right: 1rem;
		}
	}
`;
export const FooterBorder = styled.div`
	background-color: #ccc;
	height: 2px;
	width: 81%;
	margin: 2rem auto;

	@media screen and (max-width: 50em) {
		width: 100%;
	}
`;

export const FooterEnd = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media screen and (max-width: 50em) {
		justify-content: space-between;
	}
`;

export const Copyright = styled.div`
	width: 50%;
`;

export const FooterIconsContainer = styled.div`
	${FooterLink}:not(:last-child) {
		margin-right: 1rem;
	}

	@media screen and (max-width: 50em) {
		${FooterLink}:not(:last-child) {
			margin-right: 0.3rem;
		}
	}
`;

export const ContactIcon = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&:not(:last-child) {
		margin-bottom: 1rem;
	}
`;
