import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { useState } from 'react';

import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';

import { ReactComponent as CloseIcon } from '../../assets/svgs/cross.svg';

import './AuthBox.scss';

const AuthBox = ({ open, handleClose }) => {
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
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box className='modal-container'>
					<div className='modal-header'>
						<div className='header_one'>
							<h2>Come on in</h2>
							<CloseIcon onClick={handleClose} className='close-icon' />
						</div>
						<div className='header_two'>
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
				</Box>
			</Modal>
		</div>
	);
};

export default AuthBox;
