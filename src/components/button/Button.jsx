import {
	BaseButton,
	GoogleSigninButton,
	InvertedButton,
	ButtonSpinner
} from './button.styles.jsx';

export const ButtonTypeClasses = {
	base: 'base',
	google: 'sign-in-google',
	inverted: 'inverted'
};

const getButton = (buttonType = ButtonTypeClasses.base) => {
	return {
		[ButtonTypeClasses.base]: BaseButton,
		[ButtonTypeClasses.google]: GoogleSigninButton,
		[ButtonTypeClasses.inverted]: InvertedButton
	}[buttonType];
};
const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	return (
		<CustomButton {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	);
};

export default Button;
