import { SETTINGS } from '../config.js';

const initialState = {
	speed: SETTINGS.speed,
	speedMult: 1,
	age: 0,
	buyMult: 1,
}

export default function ( state = initialState, action){
	switch (action.type){
		default:
			return state;
	}
}