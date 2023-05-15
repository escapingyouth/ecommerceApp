import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
	process.env.NODE_ENV === 'development' && logger,
	thunk,
	sagaMiddleware
].filter(Boolean);

const composeEnhancer =
	(process.env.NODE_ENV !== 'production' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
