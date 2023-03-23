import * as Yup from "yup";
export const salariesTypeSchema = Yup.object({
  monthly_salary: Yup.number()
    .min(1)
    .max(1000000)
    .required("Please fill your salary"),
  company_name: Yup.string().required("Please select company name"),
  company_email: Yup.string().email().required("Please enter your email"),
});

export const selfEmployeeSchema = Yup.object({
  monthly_income: Yup.number()
    .min(1)
    .max(1000000)
    .required("Please fill you monthly Income"),
  nature_type: Yup.string()
    .min(2)
    .max(100)
    .required("Please enter nature of business"),
});
