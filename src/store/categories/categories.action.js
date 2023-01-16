import createAction from '../../utilities/reducer/reducer.utils';
import categoriesActionTypes from './categories.types';

export const setCategories = (categoriesArray) =>
	createAction(categoriesActionTypes.setCategories, categoriesArray);

export const setIsLoading = (boolean) =>
	createAction(categoriesActionTypes.setIsLoading, boolean);
