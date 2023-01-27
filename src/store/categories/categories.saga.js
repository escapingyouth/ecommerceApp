import categoriesActionTypes from './categories.types';

import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
	fetchCategoriesSuccess,
	fetchCategoriesFailed
} from './categories.action';

import { getCategoriesAndDocuments } from '../../utilities/firebase/firebaseConfig';

function* fetchCategoriesAsync() {
	try {
		const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
		yield put(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		yield put(fetchCategoriesFailed(error));
	}
}

function* onFetchCategories() {
	yield takeLatest(
		categoriesActionTypes.fetchCategoriesStart,
		fetchCategoriesAsync
	);
}

function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
}

export default categoriesSaga;
