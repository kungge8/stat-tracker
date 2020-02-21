import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './Reducers';
import {
	loadState,
	saveState,
} from './Functions/localStorage.js';
import throttle from 'lodash/throttle';

const initialState = loadState();

const middleWare = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleWare))
);

store.subscribe(throttle(() => {
	saveState(store.getState());
}, 1000));

export default store;