import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { useState } from 'react';

import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';

import { Link } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '../../assets/svgs/cross.svg';

import './AuthBox.scss';

const AuthBox = ({ open, handleClose }) => {
	const [currentComponent, setCurrentComponent] = useState('SignIn');

	const handleClick = (component) => {
		setCurrentComponent(component);
	};

	let component;
	switch (currentComponent) {
		case 'SignIn':
			component = <SignIn />;
			break;
		case 'SignUp':
			component = <SignUp />;
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
								<Link className='sign-in' onClick={() => handleClick('SignIn')}>
									Sign in
								</Link>
							</div>
							<div className='link-box'>
								<Link className='sign-up' onClick={() => handleClick('SignUp')}>
									I'm new here
								</Link>
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
