import userActionTypes from './user.types';
import createAction from '../../utilities/reducer/reducer.utils';

export const checkUserSession = () =>
	createAction(userActionTypes.checkUserSession);

export const googleSignInStart = () =>
	createAction(userActionTypes.googleSignInStart);

export const emailSignInStart = (email, password) =>
	createAction(userActionTypes.emailSignInStart, { email, password });

export const signUpStart = (email, password, name) =>
	createAction(userActionTypes.signUpStart, {
		email,
		password,
		name
	});

export const signUpSuccess = (user, additionalDetails) =>
	createAction(userActionTypes.signUpSuccess, { user, additionalDetails });

export const signOutStart = () => createAction(userActionTypes.signOutStart);
