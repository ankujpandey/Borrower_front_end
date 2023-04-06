import React, { useContext } from "react";
import { selfEmployedSchema, initialValueSelfEmployed } from "../schemas";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { UserContext } from "../context/UserContext";

function SelfEmployed(props) {
  const { user, token } = useContext(UserContext);
  const url = "/register3";
  const api = "http://localhost:4000/api/v1/createEmployment";

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(
      initialValueSelfEmployed,
      selfEmployedSchema,
      url,
      api,
      token
    );

  values.uid = user?.signUp?.uid;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="monthly_income" className="form-label">
          Monthly Income:
        </label>
        <input
          type="text"
          className="form-control"
          id="monthly_income"
          name="monthly_income"
          placeholder="Enter your monthly Income"
          value={values.monthly_income}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.monthly_income && touched.monthly_income ? (
          <p className="form-error text-danger">{errors.monthly_income}</p>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="business_nature" className="form-label">
          Nature of Business:
        </label>
        <input
          type="text"
          className="form-control"
          id="business_nature"
          name="business_nature"
          placeholder="Enter the nature of your Business"
          value={values.business_nature}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.business_nature && touched.business_nature ? (
          <p className="form-error text-danger">{errors.business_nature}</p>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Professional Email id:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter your Professional Email Id"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="form-error text-danger">{errors.email}</p>
        ) : null}
      </div>
      <button type="submit" className="btn btn-success mt-3">
        Submit
      </button>
    </form>
  );
}

export default SelfEmployed;
