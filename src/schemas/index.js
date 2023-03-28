import * as Yup from "yup"; // npm i yup

// ---------------------------------------
//   For Personal Details Registration
// ---------------------------------------

export const RegistrationSchema = Yup.object({
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
    .required("PAN can not be empty!"),
  Aadhaar: Yup.string()
    .matches(/([0-9]){12}$/, "Please enter a valid aadhaar number.")
    .max(12)
    .required("Aadhaar can not be empty!"),
});

export const RegistrationInitialValues = {
  firstName: "",
  lastName: "",
  Contact: "",
  Email: "",
  PAN: "",
  Aadhaar: "",
  PinCode: "",
  PostOffice: "",
  City: "",
  State: "",
};

// ---------------------------------------
//   For Borrowing Details Registration
// ---------------------------------------

export const BorrowingSchema = Yup.object({
  Amount: Yup.string()
    .matches(/([0-9])/, "Please enter a valid amount")
    .max(6)
    .required("Amount can't be empty"),
  Tenure: Yup.string()
    .matches(/([0-9])$/, "Please enter a valid time")
    .max(2)
    .required("Tenure can't be empty"),
});

export const BorrowingInitialValues = {
  Amount: "",
  Tenure: "",
  ROI: "",
};

// ---------------------------------------
//   For Bank Account Registration
// ---------------------------------------

export const BankSchema = Yup.object({
  AccountNumber: Yup.string()
    .matches(/([0-9])$/, "Please enter a valid Account Number")
    .max(14)
    .min(11)
    .required("Account Number can't be empty"),
});

export const BankInitialValues = {
  AccountNumber: "",
  IFSC: "",
  Bank: "",
  Branch: "",
};
