import * as Yup from "yup"; // npm i yup

// ---------------------------------------
//   For Personal Details Registration
// ---------------------------------------

export const RegistrationSchema = Yup.object({
	contact: Yup.string()
		.matches(/([6-9]){1}([0-9]){9}$/, "Please enter a valid phone number.")
		.max(10)
		.required("Contact can not be empty!"),
	pan: Yup.string()
		.matches(
			/([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
			"Please enter a valid PAN Number"
		)
		.required("PAN can not be empty!"),
	aadhaar: Yup.string()
		.matches(/([0-9]){12}$/, "Please enter a valid aadhaar number.")
		.max(12)
		.required("Aadhaar can not be empty!"),
});

export const RegistrationInitialValues = {
	contact: "",
	pan: "",
	aadhaar: "",
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
	amountAsked: Yup.string()
		.matches(/([0-9])/, "Please enter a valid amount")
		.max(6)
		.required("Amount can't be empty"),

	tenureAsked: Yup.string()
		.matches(/([0-9])$/, "Please enter a valid time")
		.max(2)
		.required("Tenure can't be empty"),

	roiAsked: Yup.string()
		.matches(/([0-9])$/, "Please enter a valid Rate of Interest")
		.min(1)
		.max(2)
		.required("Rate of Interest can't be empty"),
});

export const BorrowingInitialValues = {
	amountAsked: "",
	roiAsked: "",
	tenureAsked: "",
};

// ---------------------------------------
//   For Borrowing Details (Verify Loan)
// ---------------------------------------

export const verifyLoan = Yup.object({
	amountApproved: Yup.string()
		.matches(/([0-9])/, "Please enter a valid amount")
		.max(6)
		.required("Amount can't be empty"),

	minRoiApproved: Yup.string()
		.matches(/([0-9])$/, "Please enter a valid time")
		.max(2)
		.required("Tenure can't be empty"),

	tenureApproved: Yup.string()
		.matches(/([0-9])$/, "Please enter a valid Rate of Interest")
		.min(1)
		.max(2)
		.required("Rate of Interest can't be empty"),
});

export const verifyLoanInitialValues = {
	amountApproved: "",
	minRoiApproved: "",
	tenureApproved: "",
};

// ---------------------------------------
//   For Bank Account Registration
// ---------------------------------------

export const BankSchema = Yup.object({
	ifsc_code: Yup.string()
		.matches(/([A-Z][0-9])/, "Please enter a valid IFSC Code")
		.length(11)
		.required("IFSC Code can't be empty"),

	account_number: Yup.string()
		.matches(/([0-9])$/, "Please enter a valid Account Number")
		.max(14)
		.min(11)
		.required("Account Number can't be empty"),
});

export const BankInitialValues = {
	uid: "",
	account_number: "",
	ifsc_code: "",
	bank_name: "",
	branch_name: "",
};

// ---------------------------------------
//   For Employment Details
// ---------------------------------------

export const salariedSchema = Yup.object({
	monthly_income: Yup.number()
		.min(1)
		.max(1000000)
		.required("Please fill your monthly income"),

	company_name: Yup.string().required("Please select your company name"),

	// ----------------------------------------------
	// Pending email validation for company name
	// -------------------------------------------

	// professional_email: Yup.string().email().matches(/([a-zA-Z0-9+_.-])(@().com)$/, "Please enter a valid Account Number").required("Please enter your professional email"),
});

export const selfEmployedSchema = Yup.object({
	monthly_income: Yup.number()
		.min(1)
		.max(1000000)
		.required("Please fill you monthly Income"),

	business_nature: Yup.string()
		.min(2)
		.max(100)
		.required("Please enter nature of business"),

	professional_email: Yup.string()
		.email()
		.required("Please enter your professional email"),
});

export const initialValuesSalaried = {
	uid: "",
	employment_type: "Salaried",
	company_name: "",
	professional_email: "",
	monthly_income: "",
};
export const initialValueSelfEmployed = {
	uid: "",
	employment_type: "Self-employed",
	business_nature: "",
	monthly_income: "",
	company_name: "",
	professional_email: "",
};

// ---------------------------------------
//   For Sign-up
// ---------------------------------------

export const SignUpschema = Yup.object({
	firstName: Yup.string()
		.min(2)
		.max(80)
		.required("First Name can not be empty!"),
	lastName: Yup.string()
		.min(2, "last name can't less than 2 characters")
		.max(80)
		.optional("last name can be optional"),
	email: Yup.string()
		.matches(
			/([a-zA-Z0-9+_.-])(@(gmail|yahoo).com)$/,
			"Email should be a valid mail. No personal email id's are allowed"
		)
		.required("E-mail can not be empty!"),
	password: Yup.string()
		.min(5)
		.max(15, `password can't be greater than 15 characters`)
		.required("Please enter the password"),
	Confirmpassword: Yup.string()
		.required()
		.oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const initialValuesSignupschema = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	Confirmpassword: "",
};

// ---------------------------------------
//   For Updating user by admin
// ---------------------------------------

export const UpdateSchema = Yup.object({
	contact: Yup.string()
		.matches(/([6-9]){1}([0-9]){9}$/, "Please enter a valid phone number.")
		.max(10)
		.required("Contact can not be empty!"),

	aadhaar: Yup.string()
		.matches(/([0-9]){12}$/, "Please enter a valid aadhaar number.")
		.max(12)
		.required("Aadhaar can not be empty!"),

	pan: Yup.string()
		.matches(
			/([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
			"Please enter a valid PAN Number"
		)
		.required("PAN can not be empty!"),

	pinCode: Yup.string()
		.matches(/([0-9]){6}$/, "Please enter a valid Pin Code.")
		.max(6)
		.required("Pin Code can not be empty!"),

	monthly_income: Yup.number()
		.min(1)
		.max(1000000)
		.required("Please fill you monthly Income"),

	business_nature: Yup.string()
		.min(2)
		.max(100)
		.required("Please enter nature of business"),

	professional_email: Yup.string()
		.email()
		.required("Please enter your professional email"),

	company_name: Yup.string().required("Please select your company name"),

	ifsc_code: Yup.string()
		.matches(/([A-Z][0-9])/, "Please enter a valid IFSC Code")
		.length(11)
		.required("IFSC Code can't be empty"),

	account_number: Yup.string()
		.matches(/([0-9])$/, "Please enter a valid Account Number")
		.max(14)
		.min(11)
		.required("Account Number can't be empty"),
});
