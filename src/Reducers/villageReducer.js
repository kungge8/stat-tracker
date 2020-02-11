import {
	ADD_WORKER,
	REMOVE_WORKER,
} from '../Actions/villagerActions.js';

const initialState = {
	Lumberjack: {
		name: 'Lumberjack',
		currency: 'Wood',
		quant: 0,
		cost: 10,
		currentMult: 1,
		costMult: 1.1,
	},
	Miner: {
		name: 'Miner',
		currency: 'Iron',
		quant: 0,
		cost: 10,
		currentMult: 1,
		costMult: 1.1,
	},
	Farmer: {
		name: 'Farmer',
		currency: 'Grain',
		quant: 0,
		cost: 10,
		currentMult: 1,
		costMult: 1.1,
	},
	Hunter: {
		name: 'Hunter',
		currency: 'Meat',
		quant: 0,
		cost: 10,
		currentMult: 1,
		costMult: 1.1,
	},
	Scientist: {
		name: 'Scientist',
		currency: 'Research',
		quant: 0,
		cost: 10,
		currentMult: 1,
		costMult: 1.1,
	},
	Priest: {
		name: 'Priest',
		currency: 'Faith',
		quant: 0,
		cost: 10,
		currentMult: 1,
		costMult: 1.1,
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
					quant: state[action.id].quant + action.quant,
					currentMult: +(state[action.id].currentMult * state[action.id].costMult).toFixed(2)
				}
			}
		case REMOVE_WORKER:
			const y = state[action.id];
			return {
				...state,
				[action.id]: {
					...y,
					quant: state[action.id].quant - action.quant,
					currentMult: +(state[action.id].currentMult / state[action.id].costMult).toFixed(2)
				}
			}
		default:
			return state;
	}
}