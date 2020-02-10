export const CHANGE_SPEED = 'CHANGE_SPEED';

export const changeSpeed = (speedMult) => (dispatch) => {
	return dispatch({
		type: CHANGE_SPEED,
		speedMult
	});
}