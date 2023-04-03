import * as Yup from "yup"; // npm i yup

// ---------------------------------------
//   For Personal Details Registration
// ---------------------------------------

export const RegistrationSchema = Yup.object({
  Contact: Yup.string()
    .matches(/([6-9]){1}([0-9]){9}$/, "Please enter a valid phone number.")
    .max(10)
    .required("Contact can not be empty!"),
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
  Contact: "",
  PAN: "",
  Aadhaar: "",
};

// ---------------------------------------
//   For Address Registration
// ---------------------------------------

export const AddressSchema = Yup.object({
  pinCode: Yup.string()
    .matches(/([0-9]){6}$/, "Please enter a valid Pin Code.")
    .max(6)
    .required("Pin Code can not be empty!"),
});

export const AddressInitialValues = {
  pinCode: "",
  postOffice: "",
  city: "",
  state: "",
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
