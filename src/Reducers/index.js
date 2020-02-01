import { combineReducers } from 'redux';
import villageReducer from './villageReducer.js';

export default combineReducers({
	villager: villageReducer
});