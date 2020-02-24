import {
	TICK,
	GET_COIN,
	ADD_COIN,
	REMOVE_COIN,
	CHANGE_RATE,
	ADD_WORKER,
	REMOVE_WORKER,
} from '../Actions/villagerActions.js';
import {
	RESET_GAME,
} from '../Actions/gameActions.js';

const initialState = {
	Coin: {
		name: 'Coin',
		quant: 0,
		rate: 1,
		rateMult: 1,
		frequency: 1,
		phase: 0,
		cap: 5000,
	},
	Wood: {
		name: 'Wood',
		quant: 0,
		rate: 0,
		rateMult: 1,
		frequency: 3,
		phase: 0,		
		cap: 100,
	},
	Iron: {
		name: 'Iron',
		quant: 0,
		rate: 0,
		rateMult: 1,
		frequency: 4,
		phase: 0,
		cap: 100,
	},
	Grain: {
		name: 'Grain',
		quant: 0,
		rate: 0,
		rateMult: 1,
		frequency: 2,
		phase: 0,
		cap: 100,
	},
	Meat: {
		name: 'Meat',
		quant: 0,
		rate: 0,
		rateMult: 1,
		frequency: 5,
		phase: 0,
		cap: 100,
	},
	Research: {
		name: 'Research',
		quant: 0,
		rate: 0,
		rateMult: 1,
		frequency: 6,
		phase: 0,
		cap: 100,
	},
	Faith: {
		name: 'Faith',
		quant: 0,
		rate: 0,
		rateMult: 1,
		frequency: 7,
		phase: 0,
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
					const currPhase = --y.phase;

					if (currPhase <= 0){
						if (y.quant - y.cap >= 0) {
							return {
								...n,
								[t]: {
									...y,
									phase: y.frequency,
								}
							}
						} else if (y.quant + u >= y.cap) {
							return {
								...n,
								[t]: {
									...y,
									quant: y.cap,
									phase: y.frequency,
								}
							}
						} else {
							return {
								...n,
								[t]: {
									...y,
									quant: Math.round(y.quant + u),
									phase: y.frequency,
								}
							}						
						}						
					} else {
						return  {
							...n,
							[t]: {
								...y,
								phase: currPhase,
							}
						}
					}		
				}, {})
			);

		case RESET_GAME: 
			return initialState;

		case ADD_WORKER:
			//recieves quant, affected currency, cost
			const removedCost = action.cost.reduce((a, n) => {
				a[n.currency].quant = Math.round(a[n.currency].quant - n.quant);
				return a;
			}, JSON.parse(JSON.stringify(state)));

			removedCost[action.modifiedCurrency].rate = removedCost[action.modifiedCurrency].rate + action.quant;
			return {
				...removedCost,
			};

		case REMOVE_WORKER:
			const addedCost = action.cost.reduce((a, n) => {
				a[n.currency].quant = Math.round(a[n.currency].quant + n.quant);
				return a;
			}, JSON.parse(JSON.stringify(state)));

			addedCost[action.modifiedCurrency].rate = addedCost[action.modifiedCurrency].rate - action.quant;
			return {
				...addedCost,
			};

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