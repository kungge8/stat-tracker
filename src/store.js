import {
	createStore,
	applyMiddleware 
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { rootReducer } from './Reducers';

import { migrations } from './migrations';

const initialState = {};

const middleWare = [thunk];

const persistConfig = {
	key: 'root',
	version: 3,
	storage,
	stateReconciler: hardSet,
	migrate: createMigrate(migrations, {debug: false}),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));
export const persistor = persistStore(store);


// const store = createStore(
// 	rootReducer,
// 	initialState,
// 	composeWithDevTools(applyMiddleware(...middleWare))
// );

// store.subscribe(throttle(() => {
// 	saveState(store.getState());
// }, 1000));

// export default store;