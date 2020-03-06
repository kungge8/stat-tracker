import {
	ADD_WORKER,
	REMOVE_WORKER,
} from '../Actions/villagerActions.js';
import {
	RESET_GAME,
} from '../Actions/gameActions.js';


const initialState = {
	Lumberjack: {
		name: 'Lumberjack',
		targetCurrency: 'Wood',
		quant: 0,
		cost: [{
			currency: 'Coin',
			quant: 10,
		}],
		currentMult: 1,
		costMult: 1.1,
	},
	Miner: {
		name: 'Miner',
		targetCurrency: 'Iron',
		quant: 0,
		cost: [{
			currency: 'Coin',
			quant: 10,
		},{
			currency: 'Wood',
			quant: 10,
		}],
		currentMult: 1,
		costMult: 1.1,
	},
	Farmer: {
		name: 'Farmer',
		targetCurrency: 'Grain',
		quant: 0,
		cost: [{
			currency: 'Coin',
			quant: 10,
		}],
		currentMult: 1,
		costMult: 1.1,
	},
	Hunter: {
		name: 'Hunter',
		targetCurrency: 'Meat',
		quant: 0,
		cost: [{
			currency: 'Coin',
			quant: 10,
		}],
		currentMult: 1,
		costMult: 1.1,
	},
	Scientist: {
		name: 'Scientist',
		targetCurrency: 'Research',
		quant: 0,
		cost: [{
			currency: 'Coin',
			quant: 10,
		}],
		currentMult: 1,
		costMult: 1.1,
	},
	Priest: {
		name: 'Priest',
		targetCurrency: 'Faith',
		quant: 0,
		cost: [{
			currency: 'Coin',
			quant: 10,
		}],
		currentMult: 1,
		costMult: 1.1,
	}
}

//selectors
export const buyCostSelector = (state, key) => {
	const t = state.villager[key];
	return t.cost.map((n, i) => {
		return {
			...n,
			quant: t.cost[i].quant * t.currentMult  
		}
	})
}

export const sellCostSelector = (state, key) => {
	const t = state.villager[key];
	return t.cost.map((n, i) => {
		return {
			...n,
			quant: t.cost[i].quant * (t.currentMult / t.costMult)  
		}
	})
}

export const affectedCurrencySelector = (state, key) => state.villager[key].targetCurrency;
export const workerkeySelector = (state, key) => state.villager[key].name;
export const workerSelector = (state, key) => state.villager[key];
export const classesSelector = (state) => Object.keys(state.villager);

//reducer
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

		case RESET_GAME: 
			return initialState;

		default:
			return state;
	}
}