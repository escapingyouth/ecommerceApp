import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentUser: null,
	isLoading: false,
	error: null
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signInSuccess(state, action) {
			state.currentUser = action.payload;
		},
		signOutSuccess(state, action) {
			state.currentUser = null;
		},
		signInFailed(state, action) {
			state.error = action.payload;
		},
		signUpFailed(state, action) {
			state.error = action.payload;
		},
		signOutFailed(state, action) {
			state.error = action.payload;
		}
	}
});

export const {
	signInSuccess,
	signOutSuccess,
	signInFailed,
	signOutFailed,
	signUpFailed
} = userSlice.actions;

export const userReducer = userSlice.reducer;
