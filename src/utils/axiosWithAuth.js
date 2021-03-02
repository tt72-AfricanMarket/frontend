import axios from 'axios';

// This is a little bit different of a format using a Java backend than from what you've seen so far

const axiosWithAuth = () => {
	const token = window.localStorage.getItem("token") ?? JSON.stringify("not-logged-in");

	return axios.create({
		headers: {
			"Authorization": "Bearer " + JSON.parse(token),
			"Content-Type": "application/json"
		},
		baseURL: "https://tt72-african-marketplace.herokuapp.com/"
	})
}

export default axiosWithAuth;