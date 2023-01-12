import { createContext, useEffect, useReducer } from 'react';

import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth
} from '../utilities/firebase/firebaseConfig';

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null
});

const intialState = {
	currentUser: null
};

const userReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CURRENT_USER':
			return {
				...state,
				currentUser: payload
			};
		default:
			throw new Error(`Unhandled state of type ${type} in userReducer`);
	}
};

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, intialState);

	const { currentUser } = state;

	const setCurrentUser = (user) => {
		dispatch({ type: 'SET_CURRENT_USER', payload: user });
	};
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
