import axios from 'axios';

// This is a little bit different of a format using a Java backend than from what you've seen so far

const axiosWithAuth = () => {
	const token = window.localStorage.getItem("token") ?? JSON.stringify("not-logged-in");

	return axios.create({
		baseURL: "https://african-marketplace-tt72.herokuapp.com",
		headers: {
			"Authorization": "Bearer " + JSON.parse(token),
			"Content-Type": "application/json"
		},
	})
}

export default axiosWithAuth;