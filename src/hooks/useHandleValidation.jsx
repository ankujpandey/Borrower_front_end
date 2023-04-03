import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import { ApiCall } from "../functions/ApiCall";

export const useHandleValidation = (
  initialValues,
  validationSchema,
  url,
  api
) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      // onSubmit: (values) => {
      //   console.log(values);
      // },

      onSubmit: async (values, action) => {
        console.log(values);

        const config = {
          method: "post",
          url: api,
          headers: { "Content-Type": "application/json" },
          data: values,
        };

        let response = await ApiCall(config);

        if (response.status === 201) {
          console.log(response.data);
          setUser(response?.data?.data);
          localStorage.setItem(
            "localUser",
            JSON.stringify(response?.data?.data)
          );
          navigate(url);
        } else {
          alert("Something went wrong!!!");
        }
      },
    });

  return { values, errors, touched, handleBlur, handleChange, handleSubmit };
};
