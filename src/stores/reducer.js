const initialState = {
	employees: [],
	keepScore: false,
	allowScore: true,
	scoreDataTotal: 0,
	scoreDataCurrent: 5,
	path: 'home',
	isStarted: false,
	isComplete: false
};

const reducer = (state = initialState, action = null) => {
	switch (action.type) {
	case 'FETCH_EMPLOYEES':
		return {
			...state,
			employees: action.employeeList
		};
	case 'DECREMENT_CURRENT_SCORE':
		return {
			...state,
			scoreDataCurrent: Math.max(state.scoreDataCurrent - 1, 0)
		};
	case 'SET_NEW_SCORE':
		return {
			...state,
			scoreDataTotal: state.scoreDataTotal + state.scoreDataCurrent,
			scoreDataCurrent: 5
		};
	case 'TRACK_PATH':
		return {
			...state,
			path: action.path
		};
	case 'SIGNAL_START':
		return {
			...state,
			isStarted: true,
			isComplete: false,
			scoreDataTotal: 0,
			scoreDataCurrent: 5
		};
	case 'EXIT':
		return {
			...state,
			isComplete: true
		};
	default:
		return state;
	}
};

export default reducer;
