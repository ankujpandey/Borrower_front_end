import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHandleValidation } from "../hooks/useHandleValidation";
import {
  SignUpschema,
  initialValuesSignupschema,
} from "../schemas/Signupschema";

function SignUpPage(props) {
  const url = "/dashboard";

  const api = "http://localhost:4000/api/v1/user";

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(initialValuesSignupschema, SignUpschema, url, api);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Please enter your First name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName ? (
                <p className="form-error text-danger">{errors.firstName}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Please enter your Last name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastname && touched.lastname ? (
                <p className="form-error text-danger">{errors.lastName}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Please enter your Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error text-danger">{errors.email}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Please enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error text-danger">{errors.password}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="Confirmpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="Confirmpassword"
                name="Confirmpassword"
                placeholder="Please enter your Confirm password"
                value={values.Confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.Confirmpassword && touched.Confirmpassword ? (
                <p className="form-error text-danger">
                  {errors.Confirmpassword}
                </p>
              ) : null}
            </div>

            {/* <NavLink to="/dashboard"> */}
            <button type="submit" className="btn btn-primary">
              Sign-Up
            </button>
            {/* </NavLink> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
