export const CHANGE_SPEED = 'CHANGE_SPEED';
export const RESET_GAME = 'RESET_GAME';

export const changeSpeed = (speedMult) => (dispatch) => {
	return dispatch({
		type: CHANGE_SPEED,
		speedMult
	});
}

export const resetGame = () => (dispatch) => {
	return dispatch({
		type: RESET_GAME
	})
}