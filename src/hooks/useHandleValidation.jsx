import { useFormik } from "formik";

import { useNavigate } from "react-router";
import { ApiCall } from "../functions/ApiCall";
// import { Axios } from "../functions/Axios";
import { UserContext } from "../components/UserContext";

export const useHandleValidation = (
	initialValues,
	validationSchema,
	url,
	api
) => {
	const navigate = useNavigate();
	// const [flag, setFlag] = useState(false);

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

				const config = {
					method: "post",
					url: api,
					headers: { "Content-Type": "application/json" },
					data: values,
				};
				// try {
				// 	const data = await axios.post(
				// 		api,

				// 		values,

				// 		{
				// 			headers: {
				// 				"Content-Type": "application/json",
				// 			},
				// 		}
				// 	);
				// console.log(data);
				let data = await ApiCall(config);

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
				// action.resetForm();
			},
		});

	return { values, errors, touched, handleBlur, handleChange, handleSubmit };
};
