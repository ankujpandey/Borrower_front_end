import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { salariedSchema, initialValuesSalaried } from "../schemas";
import { UserContext } from "../context/UserContext";

function SalariedEmployee(props) {
  const { user } = useContext(UserContext);
  const url = "/register3";
  const api = "http://localhost:4000/api/v1/createEmployment";

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(initialValuesSalaried, salariedSchema, url, api);

  values.uid = user?.signUp?.uid;

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center g-3 m-3 mb-4">
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="monthly_income"
              name="monthly_income"
              placeholder="Enter your monthly income"
              value={values.monthly_income}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="monthly_income">Monthly Salary</label>
            {errors.monthly_income && touched.monthly_income ? (
              <p className="form-error text-danger">{errors.monthly_income}</p>
            ) : null}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="company_name" className="form-label">
            Company Name:
          </label>
          <select
            name="company_name"
            className="form-select"
            id="company_name"
            value={values.company_name}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="Select_Company_Name">Select Company Name</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Faircent">Faircent</option>
            <option value="Amazon">Amazon</option>
            <option value="Reliance_Industries">Reliance Industries</option>
            <option value="TATA_Consultancy_Services">
              TATA Consultancy Services
            </option>
          </select>
          {errors.company_name && touched.company_name ? (
            <p className="form-error text-danger">{errors.company_name}</p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="company_email" className="form-label">
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
          {errors.company_email && touched.company_email ? (
            <p className="form-error text-danger">{errors.company_email}</p>
          ) : null}
        </div>
        {/* <Link to="/register3"> */}
        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
        {/* </Link> */}
      </div>
    </form>
  );
}

export default SalariedEmployee;
