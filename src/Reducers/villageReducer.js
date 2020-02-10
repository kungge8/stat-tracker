import {
	ADD_WORKER,
} from '../Actions/villagerActions.js';

const initialState = {
	Worker: 0,
	Lumberjack: 0,
	Miner: 0,
	Farmer: 0,
	Hunter: 0,
	Scientist: 0,
}

export default function (state = initialState, action){
	switch (action.type){
		case ADD_WORKER:
			return {
				...state,
				[action.id]: state[action.id] + action.quant
			}

		default:
			return state;
	}
}