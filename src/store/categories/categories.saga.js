import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
	fetchCategoriesStart,
	fetchCategoriesSuccess,
	fetchCategoriesFailed
} from './categories.reducer';

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
	yield takeLatest(fetchCategoriesStart.type, fetchCategoriesAsync);
}

function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
}

export default categoriesSaga;
