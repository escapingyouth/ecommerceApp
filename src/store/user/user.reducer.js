import userTypes from './user.types';

const defaultState = {
	currentUser: null
};

const userReducer = (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case userTypes.setCurrentUser:
			return {
				...state,
				currentUser: payload
			};
		default:
			return state;
	}
};

export default userReducer;
