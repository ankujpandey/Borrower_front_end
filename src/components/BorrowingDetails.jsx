import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { BorrowingInitialValues, BorrowingSchema } from "../schemas";
import { UserContext } from "../context/UserContext";

function BorrowingDetails() {
  const { user, token } = useContext(UserContext);

  const url = "/dashboard";
  const api = "http://localhost:4000/api/v1/createLoan";

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(
      BorrowingInitialValues,
      BorrowingSchema,
      url,
      api,
      token
    );

  values.uid = user?.signUp?.uid;

  return (
    <div>
      <div className="py-5 bg-primary hero-header mb-3">
        <div className="container py-3 px-5">
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div data-wow-delay="0.1s">
                <h1 className="text-white animated zoomIn mt-5">
                  Registration
                </h1>
              </div>
              <hr
                className="bg-white mx-auto mt-0 mb-5"
                style={{ width: 90 }}
              />
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h6 className="position-relative d-inline text-primary ps-4">
          Initial Registration
        </h6>
        <h2 className="mt-2">Please enter the following details...</h2>
      </div>
      <form className="col-md-6 my-5" onSubmit={handleSubmit}>
        <legend className="mt-5">Borrowing Requirements</legend>

        <label className="col-form-label">Rate of Interest</label>
        <select
          className="form-select"
          name="rate_of_interest"
          id="rate_of_interest"
          value={values.rate_of_interest}
          onChange={handleChange}
        >
          {/* You can add the interest rates acording to you */}
          <option>Please select the rate of interest</option>
          <option value={5}>5 %</option>
          <option value={8}>8 %</option>
          <option value={10}>10 %</option>
        </select>

        <label className="col-form-label">Amount</label>
        <input
          type="text"
          className="form-control"
          name="amount"
          id="amount"
          value={values.amount}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.amount && touched.amount ? (
          <div className="form-error">{errors.amount}</div>
        ) : null}

        <label className="col-form-label">Tenure(in months)</label>

        <input
          type="text"
          className="form-control"
          name="tenure"
          id="tenure"
          value={values.tenure}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.tenure && touched.tenure ? (
          <div className="form-error">{errors.tenure}</div>
        ) : null}
        {/* <NavLink to="/register2"> */}
        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
        {/* </NavLink> */}
      </form>
    </div>
  );
}

export default BorrowingDetails;
