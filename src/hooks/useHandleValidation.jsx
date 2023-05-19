import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { ApiCall } from "../functions/ApiCall";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export const useHandleValidation = (
  initialValues,
  validationSchema,
  url,
  api,
  token,
  signUp,
  personalDetails
) => {
  const { user, setUser, setToken } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    // onSubmit: (values) => {
    //   console.log(values);
    // },

    onSubmit: async (values) => {
      const config = {
        method: "post",
        url: api,
        headers: { "Content-Type": "application/json", authorization: token },
        data: values,
      };

      let response = await ApiCall(config);

      if (response.status === 201) {
        if (signUp) {
          if (response?.data?.data?.result?.status == 203) {
            errors.email = "Email already exists! Please login to continue!";
          } else {
            setUser(response?.data?.data?.result);
            localStorage.setItem(
              "localUser",
              JSON.stringify(response?.data?.data)
            );
            setToken(response?.data?.data?.auth);
            navigate(url);
          }
        } else if (personalDetails) {
          user.userName = response.data.data;
          localStorage.setItem(
            "userPersonalDetails",
            JSON.stringify(response?.data?.data)
          );
          navigate(url);
        } else navigate(url);
      } else {
        alert("Something went wrong!!!");
      }
    },
  });

  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  };
};
