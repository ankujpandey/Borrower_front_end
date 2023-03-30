import { useFormik } from "formik";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { Axios } from "../functions/Axios";
import { UserContext } from "../components/UserContext";

export const useHandleValidation = (
  initialValues,
  validationSchema,
  url,
  api
) => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, action) => {
        const config = {
          method: "post",
          url: api,
          data: values,
          headers: { "Content-Type": "application/json" },
        };
        // console.log(values);
        // const { loading, error, data } = Axios(config);
        const res = await axios(config);
        console.log(res?.data?.data);

        if (res.status === 201) {
          setUser(res?.data?.data);
          // console.log("user--", user);
          localStorage.setItem("localUser", JSON.stringify(res?.data?.data));
          navigate(url);
        } else {
          alert("Something went wrong!!!");
        }
        action.resetForm();
      },
    });

  return { values, errors, touched, handleBlur, handleChange, handleSubmit };
};
