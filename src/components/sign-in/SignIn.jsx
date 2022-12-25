import { useState } from 'react';

import FormInput from '../form-input/FormInput';
import ButtonContainer from '../form-input/ButtonContainer';

import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword
} from '../../utilities/firebaseConfig';

const SignIn = ({ handleClick, handleClose }) => {
	const [form, setForm] = useState({ email: '', password: '' });
	const { email, password } = form;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const resetFormFields = () => {
		setForm({ email: '', password: '' });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);
			resetFormFields();
			handleClose();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Incorrect Password or Email');
					break;
				case 'auth/user-not-found':
					alert('No user associated with this email');
					break;

				default:
					console.log(error);
			}
		}
		resetFormFields();
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
		handleClose();
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className='form-group'>
				<FormInput
					label='Email'
					labelFor='email'
					type='email'
					required
					name='email'
					value={email}
					onChange={handleChange}
				/>
				<FormInput
					label='Password'
					labelFor='password'
					type='password'
					required
					placeholder='password'
					name='password'
					value={password}
					onChange={handleChange}
				/>
			</div>
			<ButtonContainer title='Sign In' signInWithGoogle={signInWithGoogle} />
			<div className='new-user' onClick={() => handleClick('SignUp', 1)}>
				New User? Register
			</div>
		</form>
	);
};

export default SignIn;
