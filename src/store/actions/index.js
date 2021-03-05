import axios from 'axios';

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_LISTING = "ADD_LISTING";

export const fetchData = () => dispatch => {
	dispatch(fetchLoading());

	axios
		.get('https://african-marketplace-tt72.herokuapp.com/category/all')
		.then(res => {
			dispatch(fetchSuccess(res.data));
			console.log("axios response: ", res.data)
		})
		.catch(err => {
			dispatch(fetchFail(err.Response.code));
		});
}

export const postListing = (userProduct) => {
	// console.log(userProduct)
	axios
		.post(`https://african-marketplace-tt72.herokuapp.com/products/product/`, userProduct)
		.then((res) => {
			console.log("Post successful! Response: ", res)
		})
		.catch(err => {
			console.log(err)
		})
}

export const fetchLoading = () => {
	return ({ type: FETCH_LOADING });
}

export const fetchSuccess = (data) => {
	return ({ type: FETCH_SUCCESS, payload: data });
}

export const fetchFail = (error) => {
	return ({ type: FETCH_FAIL, payload: error });
}

export const addToCart = (product, amt) => {
	return ({ type: ADD_TO_CART, payload: { productid: product.productid, name: product.name, quantity: amt, price: product.price } });
}

export const addListing = (userProduct) => { //we're handling state in profile page normally so this does nothing atm
	return ({ type: ADD_LISTING, payload: userProduct });
}
