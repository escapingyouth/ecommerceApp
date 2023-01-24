import { getCategoriesAndDocuments } from '../../utilities/firebase/firebaseConfig';
import createAction from '../../utilities/reducer/reducer.utils';
import categoriesActionTypes from './categories.types';

export const fetchCategoriesStart = () =>
	createAction(categoriesActionTypes.fetchCategoriesStart);

export const fetchCategoriesSuccess = (categoriesArray) =>
	createAction(categoriesActionTypes.fetchCategoriesSuccess, categoriesArray);

export const fetchCategoriesFailed = (error) =>
	createAction(categoriesActionTypes.fetchCategoriesFailure, error);

export const fetchCategoriesAsync = () => {
	return async (dispatch) => {
		dispatch(fetchCategoriesStart());
		try {
			const categoriesArray = await getCategoriesAndDocuments('categories');
			dispatch(fetchCategoriesSuccess(categoriesArray));
		} catch (error) {
			dispatch(fetchCategoriesFailed(error));
		}
	};
};
