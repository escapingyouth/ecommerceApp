import {
	FooterContainer,
	FooterList,
	FooterListItem,
	FooterLink
} from './footer.styles';
const Footer = () => {
	return (
		<FooterContainer>
			<FooterList>
				<FooterListItem>
					<FooterLink to='/'>Home</FooterLink>
					<FooterLink to='/mens'>Mens</FooterLink>
					<FooterLink to='/womens'>Womens</FooterLink>
					<FooterLink to='/kids'>Kids</FooterLink>
					<FooterLink to='/shoes'>Shoes</FooterLink>
					<FooterLink to='/beauty'>Beauty</FooterLink>
					<FooterLink to='/accessories'>Accessories</FooterLink>
				</FooterListItem>
			</FooterList>
		</FooterContainer>
	);
};

export default Footer;
