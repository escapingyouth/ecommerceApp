import { all, takeLatest, call, put } from 'redux-saga/effects';

import userActionTypes from './user.types';

import {
	signInSuccess,
	signInFailed,
	signUpFailed,
	signOutSuccess,
	signOutFailed
} from './user.reducer';

import { signUpSuccess } from './user.action';

import {
	getCurrentUser,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
	createAuthUserWithEmailAndPassword,
	signOutUser
} from '../../utilities/firebase/firebaseConfig';

function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
	try {
		const userSnapshot = yield call(
			createUserDocumentFromAuth,
			userAuth,
			additionalInfo
		);
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

function* signInWithGoogle() {
	try {
		const { user } = yield call(signInWithGooglePopup);
		yield call(getSnapshotFromUserAuth, user);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield call(
			signInAuthUserWithEmailAndPassword,
			email,
			password
		);
		yield call(getSnapshotFromUserAuth, user);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

function* isUserAuthenticated() {
	try {
		const userAuth = yield call(getCurrentUser);
		if (!userAuth) return;
		yield call(getSnapshotFromUserAuth, userAuth);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

function* signUp({ payload: { email, password, name } }) {
	try {
		const { user } = yield call(
			createAuthUserWithEmailAndPassword,
			email,
			password
		);
		yield put(signUpSuccess(user, { name }));
	} catch (error) {
		yield put(signUpFailed(error));
	}
}

function* signOut() {
	try {
		yield call(signOutUser);
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailed(error));
	}
}

function* signInAfterSignUp({ payload: { user, additionalInfo } }) {
	yield call(getSnapshotFromUserAuth, user, additionalInfo);
}

function* onGoogleSignInStart() {
	yield takeLatest(userActionTypes.googleSignInStart, signInWithGoogle);
}

function* onCheckUserSession() {
	yield takeLatest(userActionTypes.checkUserSession, isUserAuthenticated);
}

function* onEmailSignInStart() {
	yield takeLatest(userActionTypes.emailSignInStart, signInWithEmail);
}

function* onSignUpStart() {
	yield takeLatest(userActionTypes.signUpStart, signUp);
}

function* onSignUpSuccess() {
	yield takeLatest(userActionTypes.signUpSuccess, signInAfterSignUp);
}

function* onSignOutStart() {
	yield takeLatest(userActionTypes.signOutStart, signOut);
}

function* userSaga() {
	yield all([
		call(onCheckUserSession),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
		call(onSignOutStart)
	]);
}
export default userSaga;
