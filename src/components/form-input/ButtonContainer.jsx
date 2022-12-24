import { ReactComponent as GoogleLogo } from '../../assets/svgs/google.svg';

const ButtonContainer = ({ title, signInWithGoogle }) => {
	return (
		<>
			<div className='buttons-container'>
				<button type='submit' className='sign-in-button'>
					{title}
				</button>
				<button
					type='button'
					className='sign-in-google'
					onClick={signInWithGoogle}
				>
					<GoogleLogo className='google-icon' />
					<span>Continue With Google</span>
				</button>
			</div>
		</>
	);
};

export default ButtonContainer;
