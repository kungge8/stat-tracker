import { combineReducers } from 'redux';
import villageReducer from './villageReducer.js';
import gameReducer from './gameReducer.js';
import currencyReducer from './currencyReducer.js';

export default combineReducers({
	game: gameReducer,
	villager: villageReducer,
	currency: currencyReducer,
});