import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categories: [],
	isLoading: false,
	error: null
};

const categoriesSlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		fetchCategoriesStart(state) {
			state.isLoading = true;
		},
		fetchCategoriesSuccess(state, action) {
			state.categories = action.payload;
			state.isLoading = false;
		},
		fetchCategoriesFailed(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export const {
	fetchCategoriesStart,
	fetchCategoriesSuccess,
	fetchCategoriesFailed
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
