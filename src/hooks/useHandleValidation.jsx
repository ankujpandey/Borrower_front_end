import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { ApiCall } from "../functions/ApiCall";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export const useHandleValidation = (
	initialValues,
	validationSchema,
	url,
	api,
	token,
	signUp
) => {
	const { setUser, setToken } = useContext(UserContext);

	const [validUser, setValidUser] = useState(true);

	const navigate = useNavigate();

	const {
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
	} = useFormik({
		initialValues,
		validationSchema,

		// onSubmit: (values) => {
		//   console.log(values);
		// },

		onSubmit: async (values) => {
			// console.log(values);

			const config = {
				method: "post",
				url: api,
				headers: { "Content-Type": "application/json", authorization: token },
				data: values,
			};

			let response = await ApiCall(config);

			if (response.status === 201) {
				// console.log(response.data);
				// console.log(signUp);
				if (signUp) {
					// console.log(response.data.data.result.status);

					if (response?.data?.data?.result?.status == 203) {
						// setValidUser(false);
						errors.email = "Email already exists! Please login to continue!";
					} else {
						console.log(response?.data?.data?.auth);
						setUser(response?.data?.data?.result);
						// console.log(response?.data?.data?.result);
						localStorage.setItem(
							"localUser",
							JSON.stringify(response?.data?.data)
						);
						setToken(response?.data?.data?.auth);
						navigate(url);
					}
				}
				// console.log("validuser before navigate---", validUser);
				else navigate(url);
			} else {
				alert("Something went wrong!!!");
			}
		},
	});

	return {
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
	};
};
