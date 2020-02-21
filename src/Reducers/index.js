import { combineReducers } from 'redux';
import villageReducer from './villageReducer.js';
import gameReducer from './gameReducer.js';
import currencyReducer from './currencyReducer.js';

import { RESET_GAME } from '../Actions/gameActions.js';

const appReducers = combineReducers({
	game: gameReducer,
	villager: villageReducer,
	currency: currencyReducer,
});

export const rootReducer = (state, action) => {
	if (action.type === RESET_GAME){
		state = undefined;
	}

	return appReducers(state, action);
}
