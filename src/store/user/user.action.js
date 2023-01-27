import userActionTypes from './user.types';
import createAction from '../../utilities/reducer/reducer.utils';

export const setCurrentUser = (user) =>
	createAction(userActionTypes.setCurrentUser, user);

export const checkUserSession = () =>
	createAction(userActionTypes.checkUserSession);

export const googleSignInStart = () =>
	createAction(userActionTypes.googleSignInStart);

export const emailSignInStart = (email, password) =>
	createAction(userActionTypes.emailSignInStart, { email, password });

export const signInSuccess = (user) =>
	createAction(userActionTypes.signInSuccess, user);

export const signInFailed = (error) =>
	createAction(userActionTypes.signInFailed, error);

export const signUpStart = (email, password, name) =>
	createAction(userActionTypes.signUpStart, {
		email,
		password,
		name
	});

export const signUpSuccess = (user, additionalInfo) =>
	createAction(userActionTypes.signUpSuccess, { user, additionalInfo });

export const signUpFailed = (error) =>
	createAction(userActionTypes.signUpFailed, error);

export const signOutStart = () => createAction(userActionTypes.signOutStart);

export const signOutSuccess = () =>
	createAction(userActionTypes.signOutSuccess);

export const signOutFailed = (error) =>
	createAction(userActionTypes.signOutFailed, error);
