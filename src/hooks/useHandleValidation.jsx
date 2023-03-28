import { useFormik } from "formik";

export const useHandleValidation = (initialValues, validationSchema) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: values => {
        // console.log("scsdnsdfds");
        console.log(values);
        // console.log(employeeType);
      },
    });

  return { values, errors, touched, handleBlur, handleChange, handleSubmit };
};
