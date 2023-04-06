import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { ApiCall } from "../functions/ApiCall";
import { useContext } from "react";
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

	const navigate = useNavigate();

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues,
			validationSchema,
			// onSubmit: (values) => {
			//   console.log(values);
			// },

			onSubmit: async (values) => {
				console.log(values);

				const config = {
					method: "post",
					url: api,
					headers: { "Content-Type": "application/json", authorization: token },
					data: values,
				};

				let response = await ApiCall(config);

				if (response.status === 201) {
					console.log(response.data);

					if (signUp) {
						setUser(response?.data?.data.result);
						localStorage.setItem(
							"localUser",
							JSON.stringify(response?.data?.data)
						);

						setToken(response?.data?.data?.auth);
					}
					console.log(url);
					navigate(url);
				} else {
					alert("Something went wrong!!!");
				}
			},
		});

	return { values, errors, touched, handleBlur, handleChange, handleSubmit };
};
