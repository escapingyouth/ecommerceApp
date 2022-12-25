import { useState } from 'react';

import { ReactComponent as CloseIcon } from '../../assets/svgs/cross.svg';

import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';

import './auth.scss';

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
			<div className='auth-container'>
				<div className='auth-header'>
					<h2>Come on in</h2>
					<CloseIcon onClick={handleClose} className='close-icon' />
				</div>
				<div className='auth-links-container'>
					<div className='link-box'>
						<button
							className={`sign-in ${activeTab === 0 ? 'active' : ''}`}
							onClick={() => handleClick('SignIn', 0)}
						>
							Sign in
						</button>
					</div>
					<div className='link-box'>
						<button
							className={`sign-up ${activeTab === 1 ? 'active' : ''}`}
							onClick={() => handleClick('SignUp', 1)}
						>
							I'm new here
						</button>
					</div>
				</div>
			</div>
			{component}
		</>
	);
};

export default Auth;
