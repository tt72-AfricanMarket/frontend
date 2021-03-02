import axios from 'axios';

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_TO_CART = "ADD_TO_CART";

export const fetchData = () => dispatch => {
	dispatch(fetchLoading());

	axios
		.get('https://reqres.in/api/tt72-data')
		.then(res => {
			console.log("response in get, ", res)
			dispatch(fetchSuccess(res.data));
		})
		.catch(err => {
			dispatch(fetchFail(err.Response.code));
		});
}

export const fetchLoading = () => {
	return ({ type: FETCH_LOADING });
}

export const fetchSuccess = (products) => {
	return ({ type: FETCH_SUCCESS, payload: products });
}

export const fetchFail = (error) => {
	return ({ type: FETCH_FAIL, payload: error });
}

export const addToCart = () => {
	return ({ type: ADD_TO_CART });
}


//if we use these in a component, we need to:
//() => props.functionName(args)
//^^^ in our onClick