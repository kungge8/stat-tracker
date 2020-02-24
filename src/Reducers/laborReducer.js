const initialState = {
	bank: {
		name: 'Bank',
		quant: 1,
		cost: [{
			quant: 10,
			currency: 'Wood'
		},{
			quant: 10,
			currency: 'Coin'
		}],
		costMult: 1,
	}
}

export default function ( state = initialState, action){
	switch (action.type){
		default:
			return state;
	}
}