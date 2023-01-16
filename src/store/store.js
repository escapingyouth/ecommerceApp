import { createLogger } from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const logger = createLogger();

const store = configureStore({
	reducer: rootReducer,
	middleware: [logger]
});

export default store;
