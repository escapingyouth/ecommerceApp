import './form-input.scss';

const FormInput = ({ label, labelFor, ...otherProps }) => {
	return (
		<>
			<label htmlFor={labelFor}>{label}</label>
			<input {...otherProps} className='form-input' />
		</>
	);
};

export default FormInput;
