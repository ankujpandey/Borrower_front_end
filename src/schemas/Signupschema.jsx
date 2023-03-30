import * as Yup from "yup";
export const SignUpschema = Yup.object({
	firstName: Yup.string()
		.min(2)
		.max(80)
		.required("First Name can not be empty!"),
	lastName: Yup.string()
		.min(2, "last name can't less than 2 characters")
		.max(80)
		.optional("last name can optional"),
	email: Yup.string()
		.matches(
			/([a-zA-Z0-9+_.-])(@(gmail|yahoo).com)$/,
			"Email should be a valid mail. No personal email id's are allowed"
		)
		.required("E-mail can not be empty!"),
	password: Yup.string()
		// .matches(
		//   /([A-Z]){1}([a-z]){1}([a-zA-Z0-9])*(@|#|$|&)([a-zA-Z0-9])*$/,
		//   "Please follow this format : first letter capital, second letter small, include a special character(@,#,$,&) and a digit "
		// )
		.max(15, `password can't be greater than 15 characters`)
		.required("Please enter the password"),
	Confirmpassword: Yup.string()
		.required()
		.oneOf([Yup.ref("password"), null], "Password must match"),
});

export const initialValuesSignupschema = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	Confirmpassword: "",
};
