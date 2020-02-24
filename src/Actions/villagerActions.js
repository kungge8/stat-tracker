export const TICK = 'TICK';
export const GET_COIN = 'GET_COIN';
export const ADD_COIN = 'ADD_COIN';
export const REMOVE_COIN = 'REMOVE_COIN';
export const ADD_WORKER = 'ADD_WORKER';
export const REMOVE_WORKER = 'REMOVE_WORKER';
export const CHANGE_RATE = 'CHANGE_RATE';

export const tick = () => (dispatch) => {
	return dispatch({
		type: TICK,
	});
}

export const addWorker = (id, quant, modifiedCurrency, cost) => (dispatch) => {
	return dispatch({
		type: ADD_WORKER,
		quant,
		id,
		modifiedCurrency,
		cost
	});
}

export const removeWorker = (id, quant, modifiedCurrency, cost) => (dispatch) => {
	return dispatch({
		type: REMOVE_WORKER,
		id,
		quant,
		modifiedCurrency,
		cost
	});
}