import axios from "axios";

export const ApiCall = async (config) => {
	try {
		const res = await axios(config);
		return res;
	} catch (error) {
		console.log(error);
		return error;
	}
};
