const initialState = {
	bank: {
		name: 'Bank',
		description: 'Increases Coin cap',
		quant: 1,
		cost: [{
			quant: 10,
			currency: 'Wood'
		},{
			quant: 10,
			currency: 'Coin'
		}],
		costMult: 1,
		targetCurrency: ['Coin'],
	},
	library: {
		name: 'Library',
		description: 'Multiple Potatoes',
		quant: 1,
		cost: [{
			quant: 10,
			currency: 'Wood'
		},{
			quant: 10,
			currency: 'Coin'
		}],
		costMult: 1,
		targetCurrency: ['Coin'],
	},
}

//selector
export const buildingSelector = (state, key) => state.labor[key];
export const buildingNamesSelector = (state) => Object.keys(state.labor);

//reducer
export default function ( state = initialState, action){
	switch (action.type){
		default:
			return state;
	}
}