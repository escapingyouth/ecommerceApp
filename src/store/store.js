import { createLogger } from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';

import thunk from 'redux-thunk';

const logger = createLogger();

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [process.env.NODE_ENV !== 'production' && logger, thunk],
	devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);
