import axios from "axios";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
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
            localStorage.setItem("localUser", JSON.stringify(res?.data?.data));

            // // setFlag(true);
            // const uid = res?.data?.data?.signUp?.uid;
            // setUser(res.data.data);
            // console.log("uid ---- ", uid);
            // localStorage.setItem("localUser", JSON.stringify(user));
            navigate(url);
            // return uid;
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
