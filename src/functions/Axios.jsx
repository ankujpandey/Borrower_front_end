import axios from "axios";
import { useEffect, useState } from "react";

export const Axios = (config) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchApi();
	}, []);

	const fetchApi = async () => {
		try {
			const res = await axios(config);
			const datajson = await res.json();
			setData(datajson);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setError(true);
			setLoading(false);
		}
	};

	return { loading, error, data };
};
