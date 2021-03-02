import { FETCH_LOADING, FETCH_SUCCESS, FETCH_FAIL } from '../actions'

const initialState = {
    total: 0,
	products: [],
	isFetching: false,
	error: ""
}

export const fetchReducer = (state = initialState, action) => {
	switch (action.type) {
		case (FETCH_LOADING):
			return ({
				...state,
				isFetching: true
			})
		case (FETCH_SUCCESS):
			return ({
				...state,
				products: action.payload,
				isFetching: false
			})
		case (FETCH_FAIL):
			return ({
				...state,
				error: action.payload,
				isFetching: false
			})
		default:
			return state;
	}
}