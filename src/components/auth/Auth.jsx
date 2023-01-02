import { useState } from 'react';

import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';

import {
	AuthContainer,
	AuthHeader,
	AuthButton,
	AuthLinksContainer,
	LinkBox
} from './auth.styles';

import CloseIcon from '../close-icon/CloseIcon';

const Auth = ({ handleClose }) => {
	const [currentComponent, setCurrentComponent] = useState('SignIn');
	const [activeTab, setActiveTab] = useState(0);

	const handleComponentChange = (component) => {
		setCurrentComponent(component);
	};
	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	const handleClick = (component, index) => {
		handleComponentChange(component);
		handleTabClick(index);
	};

	let component;
	switch (currentComponent) {
		case 'SignIn':
			component = (
				<SignIn handleClick={handleClick} handleClose={handleClose} />
			);
			break;
		case 'SignUp':
			component = <SignUp handleClose={handleClose} />;
			break;
		default:
			component = null;
	}
	return (
		<>
			<AuthContainer>
				<AuthHeader>
					<h2>Come on in</h2>
					<CloseIcon onClick={handleClose} />
				</AuthHeader>
				<AuthLinksContainer>
					<LinkBox>
						<AuthButton
							isActiveTab={activeTab === 0}
							onClick={() => handleClick('SignIn', 0)}
						>
							Sign in
						</AuthButton>
					</LinkBox>
					<LinkBox>
						<AuthButton
							isActiveTab={activeTab === 1}
							onClick={() => handleClick('SignUp', 1)}
						>
							I'm new here
						</AuthButton>
					</LinkBox>
				</AuthLinksContainer>
			</AuthContainer>
			{component}
		</>
	);
};

export default Auth;
