import {
	GET_COIN,
	ADD_COIN,
	REMOVE_COIN,
	ADD_WORKER,
} from '../Actions/villagerActions.js';

const initialState = {
	coin: {
		name: 'coin',
		quant: 0,
		rate: 1,
		rateMult: 1,
		cap: 5000,
	},
	wood: {
		name: 'wood',
		quant: 0,
		rate: 0,
		rateMult: 1,
		cap: 100,
	},
	iron: {
		name: 'iron',
		quant: 0,
		rate: 0,
		rateMult: 1,
		cap: 100,
	},
	grain: {
		name: 'grain',
		quant: 0,
		rate: 0,
		rateMult: 1,
		cap: 100,
	},
	meat: {
		name: 'meat',
		quant: 0,
		rate: 0,
		rateMult: 1,
		cap: 100,
	},
	research: {
		name: 'research',
		quant: 0,
		rate: 0,
		rateMult: 1,
		cap: 100,
	},
}



export default function (state = initialState, action){
	switch (action.type){
		case ADD_COIN:
			return (
				Object.entries(state).reduce((n, v) => {
					const t = v[0];
					const y = v[1];
					return {
						...n,
						[t]: {
							...y,
							quant: y.quant + (y.rate * y.rateMult)
						}
					}
				}, {})
			);

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