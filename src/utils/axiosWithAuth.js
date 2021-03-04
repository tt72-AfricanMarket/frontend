import axios from 'axios';

// This is a little bit different of a format using a Java backend than from what you've seen so far



const axiosWithAuth = () => {
	const token = window.localStorage.getItem("token");

	return axios.create({
		headers: {
			Authorization: `Bearer ${token}`,
		},
		baseURL: "https://african-marketplace-tt72.herokuapp.com",
	});
};

export default axiosWithAuth;
