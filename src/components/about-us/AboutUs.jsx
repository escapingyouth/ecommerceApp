import { Link } from 'react-router-dom';
import {
	BrandSection,
	BrandContainer,
	BrandTextContainer,
	BrandImage,
	BrandIconsContainer
} from './about-us.styles';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = () => {
	return (
		<BrandSection>
			<h1>About us</h1>

			<BrandContainer>
				<BrandImage></BrandImage>
				<BrandTextContainer>
					<div>
						<h2>About Kings and Queens</h2>
						<p>
							Kings and Queens is an online store for regal clothing and
							accessories. Our team is passionate about fashion and history, and
							we offer a curated selection of royal-inspired items. Shop with us
							to add a touch of glamour and regality to your everyday life. We
							pride ourselves on excellent customer service and high-quality
							products. Thank you for choosing Kings and Queens.
						</p>
						<span>Visit our pages</span>
						<BrandIconsContainer>
							<Link to=''>
								<InstagramIcon />
							</Link>
							<Link to=''>
								<FacebookIcon />
							</Link>
							<Link to=''>
								<TwitterIcon />
							</Link>
							<Link to=''>
								<LinkedInIcon />
							</Link>
						</BrandIconsContainer>
					</div>
				</BrandTextContainer>
			</BrandContainer>
		</BrandSection>
	);
};

export default AboutUs;
