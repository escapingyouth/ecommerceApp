import createAction from '../../utilities/reducer/reducer.utils';
import categoriesActionTypes from './categories.types';

export const fetchCategoriesStart = () =>
	createAction(categoriesActionTypes.fetchCategoriesStart);

export const fetchCategoriesSuccess = (categoriesArray) =>
	createAction(categoriesActionTypes.fetchCategoriesSuccess, categoriesArray);

export const fetchCategoriesFailed = (error) =>
	createAction(categoriesActionTypes.fetchCategoriesFailed, error);
