export const GET_COIN = 'GET_COIN';
export const ADD_COIN = 'ADD_COIN';
export const REMOVE_COIN = 'REMOVE_COIN';
export const ADD_WORKER = 'ADD_WORKER';

export const addCoin = () => (dispatch) => {
	return dispatch({
		type: ADD_COIN,
	});
}

export const removeCoin = (id, cost) => (dispatch) => {
	return dispatch({
		type: REMOVE_COIN,
		id,
		cost,
	});
}

export const addWorker = (id, quant) => (dispatch) => {
	return dispatch({
		type: ADD_WORKER,
		quant,
		id,
	})
}