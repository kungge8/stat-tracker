import {
	TICK,
	GET_COIN,
	ADD_COIN,
	REMOVE_COIN,
	CHANGE_RATE,
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
		case TICK:
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
								quant: Math.round(y.quant + u)
							}
						}
					}
				}, {})
			);
		case CHANGE_RATE:
			const u = state[action.id]
			return {
				...state,
				[action.id]: {
					...u,
					rate: u.rate + action.rate
				}
			};

		case ADD_COIN:
			const y = state[action.id];
			return {
				...state,
				[action.id]: {
					...y,
					quant: Math.round(y.quant + action.quant)
				}
			};		

		case REMOVE_COIN:
			const t = state[action.id];
			return {
				...state,
				[action.id]: {
					...t,
					quant: Math.round(t.quant - action.quant)
				}
			};

		default:
			return state;
	}
}