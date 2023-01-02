import { GoogleIcon } from '../google-icon/GoogleIcon';
import { ButtonTypeClasses } from '../button/Button';

import Button from '../button/Button';

const ButtonGroup = ({ title, signInWithGoogle }) => {
	return (
		<>
			<Button type='submit' buttonType={ButtonTypeClasses.base}>
				{title}
			</Button>
			<Button
				type='button'
				buttonType={ButtonTypeClasses.google}
				onClick={signInWithGoogle}
			>
				<GoogleIcon />
				<span>Continue With Google</span>
			</Button>
		</>
	);
};

export default ButtonGroup;
