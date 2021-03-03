import { FETCH_LOADING, FETCH_SUCCESS, FETCH_FAIL } from '../actions'

const initialState = {
	categories: [],
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
			const categories = action.payload;
			const products = [].concat.apply([], categories.map(category => category.products))
			return ({
				...state,
				categories: categories,
				isFetching: false,
				products: products
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