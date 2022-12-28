import './button.scss';

const buttonTypeClasses = {
	primary: 'primary-button',
	inverted: 'inverted-button',
	google: 'sign-in-google'
};

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<button
			{...otherProps}
			className={`button ${buttonTypeClasses[buttonType]}`}
		>
			{children}
		</button>
	);
};

export default Button;
