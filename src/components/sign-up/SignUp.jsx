import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import ButtonContainer from '../form-input/ButtonContainer';

const defaultFormFields = {
	name: '',
	email: '',
	password: '',
	confirmPassword: ''
};
const SignUp = () => {
	const [form, setForm] = useState(defaultFormFields);
	const { name, email, password, confirmPassword } = form;

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
					label='Name'
					labelFor='name'
					placeholder='name'
					type='text'
					required
					name='name'
					value={name}
					onChange={handleChange}
				/>
				<FormInput
					label='Email'
					labelFor='email'
					type='email'
					required
					name='email'
					placeholder='name@example.com'
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
				<FormInput
					label='Confirm Password'
					labelFor='confirmPassword'
					type='password'
					required
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
				/>
			</div>
			<ButtonContainer title='Register' />
		</form>
	);
};

export default SignUp;
