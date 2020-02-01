export const GET_COIN = 'GET_COIN';
export const ADD_COIN = 'ADD_COIN';
export const REMOVE_COIN = 'REMOVE_COIN';
export const ADD_WORKER = 'ADD_WORKER';

export const addCoin = (quant) => (dispatch) => {
	return dispatch({
		type: ADD_COIN,
		quant
	});
}

export const removeCoin = (quant) => (dispatch) => {
	return dispatch({
		type: REMOVE_COIN,
		quant
	});
}

export const addWorker = (quant, id) => (dispatch) => {
	switch (id){
		case 'Worker':
			return dispatch({
				type: ADD_WORKER,
				quant
			})
		default:
			return;
	}

}