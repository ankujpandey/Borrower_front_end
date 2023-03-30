import React from "react";
import { NavLink } from "react-router-dom";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { BorrowingInitialValues, BorrowingSchema } from "../schemas";

function BorrowingDetails() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(BorrowingInitialValues, BorrowingSchema);

  return (
    <div className="container">
      <form className="col-md-6 my-5" onSubmit={handleSubmit}>
        <legend className="mt-5">Borrowing Requirements</legend>

        <label className="col-form-label">Rate of Interest</label>
        <select
          className="form-select"
          name="ROI"
          value={values.ROI}
          onChange={handleChange}
          onBlur={handleBlur}
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
          name="Amount"
          value={values.Amount}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.Amount && touched.Amount ? (
          <div className="form-error">{errors.Amount}</div>
        ) : null}

        <label className="col-form-label">Tenure(in months)</label>

        <input
          type="text"
          className="form-control"
          name="Tenure"
          value={values.Tenure}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.Tenure && touched.Tenure ? (
          <div className="form-error">{errors.Tenure}</div>
        ) : null}
        <NavLink to="/register2">
          <button type="submit" className="btn btn-success mt-3">
            Submit
          </button>
        </NavLink>
      </form>
    </div>
  );
}

export default BorrowingDetails;
