// imports
// import axios from 'axios';
// import axiosAuth from '../../../utils/axiosAuth';
// import { axiosLogin } from '../../../utils/axiosSecret';

//action types
// Example --v
export const FETCH_CURRENT_USER_START = 'FETCH_CURRENT_USER_START';
export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const FETCH_CURRENT_USER_FAILURE = 'FETCH_CURRENT_USER_FAILURE';

// Creators
// Example --v
export const fetchCurrentUser = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_CURRENT_USER_START });

		axiosAuth().get('users/current')
			.then((res) => {
				dispatch({
					type: FETCH_CURRENT_USER_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: FETCH_CURRENT_USER_FAILURE,
					payload: err.message
				})
			})
	}
}