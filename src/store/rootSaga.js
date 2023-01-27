import { all, call } from 'redux-saga/effects';

import categoriesSaga from './categories/categories.saga';
import userSaga from './user/user.saga';

function* rootSaga() {
	yield all([call(categoriesSaga), call(userSaga)]);
}
export default rootSaga;
