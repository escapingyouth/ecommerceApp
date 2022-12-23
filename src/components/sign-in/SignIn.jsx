import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import ButtonContainer from '../form-input/ButtonContainer';

const SignIn = () => {
	const [form, setForm] = useState({ email: '', password: '' });
	const { email, password } = form;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
					label='password'
					labelFor='password'
					type='password'
					required
					placeholder='password'
					name='password'
					value={password}
					onChange={handleChange}
				/>
			</div>
			<ButtonContainer title='Sign In' />
			<div className='new-user'>New User? Register </div>
		</form>
	);
};

export default SignIn;
