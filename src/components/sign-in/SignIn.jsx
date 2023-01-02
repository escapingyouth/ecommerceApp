import { useState } from 'react';

import FormInput from '../form-input/FormInput';
import ButtonGroup from '../form-input/ButtonGroup';

import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword
} from '../../utilities/firebase/firebaseConfig';

import { Form, FormGroup, NewUser } from '../form-input/form-input.styles';
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
		<Form onSubmit={handleSubmit}>
			<FormGroup>
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
			</FormGroup>
			<ButtonGroup title='Sign In' signInWithGoogle={signInWithGoogle} />
			<NewUser onClick={() => handleClick('SignUp', 1)}>
				New User? Register
			</NewUser>
		</Form>
	);
};

export default SignIn;
