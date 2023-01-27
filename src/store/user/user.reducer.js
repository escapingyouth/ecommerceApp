import userActionTypes from './user.types';

const userDefaultState = {
	currentUser: null,
	isLoading: false,
	error: null
};

const userReducer = (state = userDefaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case userActionTypes.signInSuccess:
			return {
				...state,
				currentUser: payload
			};
		case userActionTypes.signOutSuccess:
			return {
				...state,
				currentUser: null
			};
		case userActionTypes.signInFailed:
		case userActionTypes.signUpFailed:
		case userActionTypes.signOutFailed:
			return {
				...state,
				error: payload
			};
		default:
			return state;
	}
};

export default userReducer;
