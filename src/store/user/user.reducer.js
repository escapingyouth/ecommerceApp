import userActionTypes from './user.types';

const userDefaultState = {
	currentUser: null
};

const userReducer = (state = userDefaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case userActionTypes.setCurrentUser:
			return {
				...state,
				currentUser: payload
			};
		default:
			return state;
	}
};

export default userReducer;
