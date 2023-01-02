import {
	BaseButton,
	GoogleSigninButton,
	InvertedButton
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
const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
