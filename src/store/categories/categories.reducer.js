import categoriesActionTypes from './categories.types';

const categoriesDefaultState = {
	categories: [],
	isLoading: false,
	error: null
};

const categoriesReducer = (state = categoriesDefaultState, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case categoriesActionTypes.fetchCategoriesStart:
			return {
				...state,
				isLoading: true
			};
		case categoriesActionTypes.fetchCategoriesSuccess:
			return {
				...state,
				categories: payload,
				isLoading: false
			};
		case categoriesActionTypes.fetchCategoriesFailure:
			return {
				...state,
				isLoading: false,
				error: payload
			};
		default:
			return state;
	}
};

export default categoriesReducer;
