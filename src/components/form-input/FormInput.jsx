import { Input } from './form-input.styles';

const FormInput = ({ label, labelFor, ...otherProps }) => {
	return (
		<>
			<label htmlFor={labelFor}>{label}</label>
			<Input {...otherProps} />
		</>
	);
};

export default FormInput;
