import { createLogger } from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [
		process.env.NODE_ENV !== 'production' && logger,
		sagaMiddleware
	].filter(Boolean),
	devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
