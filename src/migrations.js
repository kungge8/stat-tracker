export const migrations = {
	3: (state) => {
		return {
			...state,
			labor: {
				...state.labor,
				library: {
					...state.labor.library,
					description: 'ROFLCOPTER',
				}
			}			
		}
	},
	0: (state) => {
		return {
			...state,
			labor: {
				...state.labor,
				library: {
					...state.labor.library,
					description: 'Testing migrations',
				}
			}			
		}
	},
	1: (state) => {
		return {
			...state,
			labor: {
				...state.labor,
				library: {
					...state.labor.library,
					description: 'MIGOTO',
				}
			}			
		}
	},
	2: (state) => {
		return {
			...state,
			labor: {
				...state.labor,
				library: {
					...state.labor.library,
					description: 'STACYCAKES',
				}
			}			
		}
	},
}