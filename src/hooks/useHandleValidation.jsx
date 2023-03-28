import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const useHandleValidation = (
  initialValues,
  validationSchema,
  url,
  api
) => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);

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
        try {
          const res = await axios.post(
            api,

            values,

            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(res);
          if (res.status === 201) {
            // setFlag(true);
            navigate(url);
          } else {
            alert("Something went wrong!!!");
          }
        } catch (error) {
          console.log(error);
        }
        action.resetForm();
      },
    });

  return { values, errors, touched, handleBlur, handleChange, handleSubmit };
};
