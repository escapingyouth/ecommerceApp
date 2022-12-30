import { ReactComponent as GoogleLogo } from '../../assets/svgs/google.svg';

import Button from '../button/Button';

const ButtonContainer = ({ title, signInWithGoogle }) => {
	return (
		<>
			<div className='buttons-container'>
				<Button type='submit' buttonType='primary'>
					{title}
				</Button>
				<Button type='button' buttonType='google' onClick={signInWithGoogle}>
					<GoogleLogo className='google-icon' />
					<span>Continue With Google</span>
				</Button>
			</div>
		</>
	);
};

export default ButtonContainer;
