import categoriesActionTypes from './categories.types';

const categoriesDefaultState = {
	categories: [],
	isLoading: true
};

const categoriesReducer = (state = categoriesDefaultState, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case categoriesActionTypes.setCategories:
			return {
				...state,
				categories: payload
			};
		case categoriesActionTypes.setIsLoading:
			return {
				...state,
				isLoading: payload
			};
		default:
			return state;
	}
};

export default categoriesReducer;
