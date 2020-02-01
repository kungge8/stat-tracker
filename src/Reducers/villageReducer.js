import {
	GET_COIN,
	ADD_COIN,
	REMOVE_COIN
} from '../Actions/villagerActions.js';

const initialState = {
	coin: 0,
	Worker: 0,
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
		case REMOVE_COIN:
			if ( state.coin - action.quant >= 0){
				temp = state.coin - action.quant;			
				return {
					...state,
					coin: temp
				}
			}

		default:
			return state;
	}
}