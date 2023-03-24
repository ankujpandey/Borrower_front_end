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
});

export const initialValuesSignupschema = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
