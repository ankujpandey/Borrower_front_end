import axios from "axios";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Axios } from "../functions/Axios";
import { UserContext } from "../components/UserContext";

export const useHandleValidation = (
	initialValues,
	validationSchema,
	url,
	api
) => {
	const navigate = useNavigate();
	// const [flag, setFlag] = useState(false);

	const config = {
		method: "post",
		url: api,
		headers: { "Content-Type": "application/json" },
	};

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues,
			validationSchema,
			// onSubmit: (values) => {
			//   // console.log("scsdnsdfds");
			//   console.log(values);
			//   // console.log(employeeType);
			//   // setFlag(true);
			// },

			onSubmit: async (values, action) => {
				console.log(values);
				// try {
				// 	const res = await axios.post(
				// 		api,

				// 		values,

				// 		{
				// 			headers: {
				// 				"Content-Type": "application/json",
				// 			},
				// 		}
				// 	);
				// 	console.log(res);

				const { loading, error, data } = Axios(config);

				if (data.status === 201) {
					// setFlag(true);
					console.log(data.data);
					localStorage.setItem("localUser", JSON.stringify(res?.data?.data));
					navigate(url);
				} else {
					alert("Something went wrong!!!");
				}
				// } catch (error) {
				// 	console.log(error);
				// }
				action.resetForm();
			},
		});

	return { values, errors, touched, handleBlur, handleChange, handleSubmit };
};
