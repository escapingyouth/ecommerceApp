import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
	process.env.NODE_ENV === 'development' && logger,
	sagaMiddleware
].filter(Boolean);

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		}).concat(middlewares)
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
