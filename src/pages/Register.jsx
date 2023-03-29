import React, { useEffect, useState } from "react";
// import axios from "axios"; //npm i axios
import { Link } from "react-router-dom";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { RegistrationInitialValues, RegistrationSchema } from "../schemas";

function Register() {
  const url = "/address";

  const api = "http://localhost:4000/api/v1/user";

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(RegistrationInitialValues, RegistrationSchema, url);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h2>Registration Form</h2>

          <form className="col-md-6 my-5" onSubmit={handleSubmit}>
            <label className="col-form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={values.firstName}
              disabled
            />

            <label className="col-form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={values.lastName}
              disabled
            />

            <label className="col-form-label">Contact</label>
            <input
              type="text"
              className="form-control"
              name="Contact"
              value={values.Contact}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Contact && touched.Contact ? (
              <div className="form-error">{errors.Contact}</div>
            ) : null}

            <label className="col-form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="Email"
              value={values.Email}
              disabled
            />

            <label className="col-form-label">PAN</label>
            <input
              type="text"
              className="form-control"
              name="PAN"
              value={values.PAN}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.PAN && touched.PAN ? (
              <div className="form-error">{errors.PAN}</div>
            ) : null}

            <label className="col-form-label">Aadhaar</label>
            <input
              type="text"
              className="form-control"
              name="Aadhaar"
              value={values.Aadhaar}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Aadhaar && touched.Aadhaar ? (
              <div className="form-error">{errors.Aadhaar}</div>
            ) : null}

            <Link to="/address">
              <button type="submit" className="btn btn-success mt-3">
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
