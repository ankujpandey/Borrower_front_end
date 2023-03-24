import React from "react";
import {
  selfEmployedSchema,
  initialValueSelfEmployed,
} from "../schema/EmploymetTypeValidation";
import { useHandleValidation } from "../hooks/useHandleValidation";

function SelfEmployed(props) {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(initialValueSelfEmployed, selfEmployedSchema);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="monthly_income">Monthly Income:</label>
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
        <label htmlFor="nature">Nature of Business:</label>
        <input
          type="text"
          className="form-control"
          id="nature"
          name="nature"
          placeholder="Enter your nature of Business"
          value={values.nature}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.nature && touched.nature ? (
          <p className="form-error text-danger">{errors.nature}</p>
        ) : null}
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}

export default SelfEmployed;
