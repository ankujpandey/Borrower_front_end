import { useFormik } from "formik"; //npm i formik
import { validationSchema, initialValues } from "../schemas";

export const useHandleValidation = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return { values, errors, touched, handleBlur, handleChange, handleSubmit };
};
