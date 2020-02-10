import {
	GET_COIN,
	ADD_COIN,
	REMOVE_COIN,
	ADD_WORKER,
} from '../Actions/villagerActions.js';

const initialState = {
	Coin: {
		name: 'Coin',
		quant: 0,
		rate: 1,
		rateMult: 1,
		cap: 5000,
	},
	Wood: {
		name: 'Wood',
		quant: 0,
		rate: 0,
		rateMult: 1,
		cap: 100,
	},
	Iron: {
		name: 'Iron',
		quant: 0,
		rate: 0,
		rateMult: 1,
		cap: 100,
	},
	Grain: {
		name: 'Grain',
		quant: 0,
		rate: 0,
		rateMult: 1,
		cap: 100,
	},
	Meat: {
		name: 'Meat',
		quant: 0,
		rate: 0,
		rateMult: 1,
		cap: 100,
	},
	Research: {
		name: 'Research',
		quant: 0,
		rate: 0,
		rateMult: 1,
		cap: 100,
	},
	Faith: {
		name: 'Faith',
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
					const u = y.rate * y.rateMult;
					if (y.quant - y.cap >= 0 || y.quant + u >= y.cap) {
						return {
							...n,
							[t]: {
								...y,
								quant: y.cap
							}
						}
					} else {
						return {
							...n,
							[t]: {
								...y,
								quant: y.quant + u
							}
						}
					}
				}, {})
			);
			
		case REMOVE_COIN:
			const t = state[action.id];
			return {
				...state,
				[action.id]: {
					...t,
					quant: t.quant - action.cost
				}
			}

		default:
			return state;
	}
}