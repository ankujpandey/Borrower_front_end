import * as Yup from "yup"; // npm i yup

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(80)
    .required("First Name can not be empty!"),
  Contact: Yup.string()
    .matches(/([6-9]){1}([0-9]){9}$/, "Please enter a valid phone number.")
    .max(10)
    .required("Contact can not be empty!"),
  Email: Yup.string()
    .matches(
      /([a-zA-Z0-9+_.-])(@(gmail|yahoo).com)$/,
      "Email should be a valid mail. No personal email id's are allowed"
    )
    .required("E-mail can not be empty!"),
  PAN: Yup.string()
    .matches(
      /([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
      "Please enter a valid PAN Number"
    )
    .required("Pan can not be empty!"),
  Aadhar: Yup.string()
    .matches(/([0-9]){12}$/, "Please enter a valid aadhar number.")
    .max(12)
    .required("Aadhaar can not be empty!"),
  PinCode: Yup.string()
    .matches(/([0-9]){6}$/, "Please enter a valid Pin Code.")
    .max(6)
    .required("Pin Code can not be empty!"),
  Amount: Yup.string()
    .matches(/([0-9])/, "Please enter a valid amount")
    .max(6)
    .required("Amount can't be empty"),
  Tenure: Yup.string()
    .matches(/([0-9])$/, "Please enter a valid time")
    .max(2)
    .required("Tenure can't be empty"),
  AccountNumber: Yup.string()
    .matches(/([0-9])$/, "Please enter a valid Account Number")
    .max(14)
    .min(11)
    .required("Account Number can't be empty"),
});

export const initialValues = {
  firstName: "",
  lastName: "",
  Contact: "",
  Email: "",
  PAN: "",
  Aadhar: "",
  PinCode: "",
  Amount: "",
  Tenure: "",
  AccountNumber: "",
  IFSC: "",
  Bank: "",
  Branch: "",
};
