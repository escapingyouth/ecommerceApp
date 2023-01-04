import {
	FooterContainer,
	FooterNav,
	FooterContent,
	ContactIcon,
	FooterList,
	FooterLinksContainer,
	FooterLink,
	FooterBorder,
	FooterEnd,
	Copyright,
	FooterIconsContainer
} from './footer.styles';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterNav>
				<FooterContent>
					<h3>About</h3>
					<p>
						Kings and Queens Clothing was founded in July 2020 by Clark and Lois
						Kent. The couple had a passion for unique, handcrafted items and saw
						an opportunity to sell these types of products online. They started
						small, with just a few jewelry and home decor items, but quickly
						expanded their product line to include clothing and accessories.
					</p>

					<h3>Contact us</h3>
					<ContactIcon>
						<SmartphoneIcon />
						<span>+233 256 XXXX</span>
					</ContactIcon>
					<ContactIcon>
						<MailOutlineIcon />
						<span>kingsandqueens@gmail.com</span>
					</ContactIcon>
					<ContactIcon>
						<PlaceIcon />
						<span>Cambridge Avenue, Accra</span>
					</ContactIcon>
				</FooterContent>
				<FooterList>
					<h3>Quick Links</h3>
					<FooterLinksContainer>
						<FooterLink to='/'>Home</FooterLink>
						<FooterLink to='/mens'>Mens</FooterLink>
						<FooterLink to='/womens'>Womens</FooterLink>
						<FooterLink to='/kids'>Kids</FooterLink>
						<FooterLink to='/shoes'>Shoes</FooterLink>
						<FooterLink to='/beauty'>Beauty</FooterLink>
						<FooterLink to='/accessories'>Accessories</FooterLink>
					</FooterLinksContainer>
				</FooterList>
			</FooterNav>
			<FooterBorder />
			<FooterEnd>
				<Copyright>&copy; 2023 All Rights Reserved</Copyright>
				<FooterIconsContainer>
					<FooterLink to=''>
						<InstagramIcon />
					</FooterLink>
					<FooterLink to=''>
						<FacebookIcon />
					</FooterLink>
					<FooterLink to=''>
						<TwitterIcon />
					</FooterLink>
					<FooterLink to=''>
						<LinkedInIcon />
					</FooterLink>
				</FooterIconsContainer>
			</FooterEnd>
		</FooterContainer>
	);
};

export default Footer;
