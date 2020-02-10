import {
	ADD_WORKER,
} from '../Actions/villagerActions.js';

const initialState = {
	Worker: {
		name: 'Worker',
		quant: 0,
		cost: 10,
		costMult: 1,
	},
	Lumberjack: {
		name: 'Lumberjack',
		quant: 0,
		cost: 10,
		costMult: 1,
	},
	Miner: {
		name: 'Miner',
		quant: 0,
		cost: 10,
		costMult: 1,
	},
	Farmer: {
		name: 'Farmer',
		quant: 0,
		cost: 10,
		costMult: 1,
	},
	Hunter: {
		name: 'Hunter',
		quant: 0,
		cost: 10,
		costMult: 1,
	},
	Scientist: {
		name: 'Scientist',
		quant: 0,
		cost: 10,
		costMult: 1,
	},
	Priest: {
		name: 'Priest',
		quant: 0,
		cost: 10,
		costMult: 1,
	}
}

export default function (state = initialState, action){
	switch (action.type){
		case ADD_WORKER:
			const t = state[action.id];
			return {
				...state,
				[action.id]: {
					...t,
					quant: state[action.id].quant + action.quant
				}
			}

		default:
			return state;
	}
}