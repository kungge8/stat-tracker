import {
	GET_COIN,
	ADD_COIN,
	REMOVE_COIN,
	ADD_WORKER,
} from '../Actions/villagerActions.js';

const initialState = {
	coin: 0,
	Worker: 0,
	Scientist: 0,
}

let temp = 0;

export default function (state = initialState, action){
	switch (action.type){
		case ADD_COIN:
			temp = state.coin + action.quant;
			return {
				...state,
				coin: temp
			}

		case ADD_WORKER:
			if (state.coin - (action.cost * action.quant) >= 0){
				return {
					...state,
					[action.id]: state[action.id] + action.quant
				}
			} else {
				return state;
			}


		case REMOVE_COIN:
			if (state.coin - action.cost >= 0){		
				return {
					...state,
					coin: state.coin - action.cost
				}
			} else {
				return state;
			}

		default:
			return state;
	}
}