import React, { useState } from "react";
import { useFormik } from "formik";
import {
  salariesTypeSchema,
  selfEmployeeSchema,
} from "../schema/EmploymetTypeValidation";
const initialValuesSalaries = {
  monthly_salary: "",
  company_name: "",
  company_email: "",
  nature_type: "",
  monthly_income: "",
};
const initialValueSelfEmployee = {
  nature_type: "",
  monthly_income: "",
  monthly_salary: "",
  company_name: "",
  company_email: "",
};

function EmploymentType(props) {
  const [employeeType, setEmployeeType] = useState("Select_Option");
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues:
        employeeType == "Salaried"
          ? initialValuesSalaries
          : initialValueSelfEmployee,
      validationSchema:
        employeeType == "Salaried" ? salariesTypeSchema : selfEmployeeSchema,
      onSubmit: (values, action) => {
        console.log(values);
        console.log(employeeType);
        action.resetForm();
      },
    });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div>
            <label htmlFor="emp_type">Choose Employment Type:</label>
            <select
              className="form-select"
              name="emp_type"
              id="emp_type"
              value={employeeType}
              onChange={(e) => setEmployeeType(e.target.value)}
            >
              <option value="Select_Option" selected>
                Select Option
              </option>
              <option value="Salaried">Salaried</option>
              <option value="self_employed">Self Employed</option>
            </select>
          </div>
          <form onSubmit={handleSubmit} action="">
            {/* salaried */}
            {employeeType == "Select_Option" ? null : employeeType ==
              "Salaried" ? (
              <div>
                <div className="form-group">
                  <label htmlFor="monthly_salary">Monthly Salary:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="monthly_salary"
                    name="monthly_salary"
                    placeholder="Enter your monthly Salary"
                    value={values.monthly_salary}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.monthly_salary && touched.monthly_salary ? (
                    <p className="form-error text-danger">
                      {errors.monthly_salary}
                    </p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="company_name">Company Name:</label>
                  <select
                    name="company_name"
                    id="company_name"
                    value={values.company_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="Select_Company_Name" selected>
                      Select Company Name
                    </option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Faircent">Faircent</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Reliance_Industries">
                      Reliance Industries
                    </option>
                    <option value="TATA_Consultancy_Services">
                      TATA Consultancy Services
                    </option>
                  </select>
                  {errors.company_name && touched.company_name ? (
                    <p className="form-error text-danger">
                      {errors.company_name}
                    </p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="company_email"> Company Email id:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="company_email"
                    name="company_email"
                    placeholder="Enter your Company Email Id"
                    value={values.company_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.company_email && touched.company_email ? (
                    <p className="form-error text-danger">
                      {errors.company_email}
                    </p>
                  ) : null}
                </div>
              </div>
            ) : (
              <div>
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
                    <p className="form-error text-danger">
                      {errors.monthly_income}
                    </p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="nature_type">Nature of Business:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nature_type"
                    name="nature_type"
                    placeholder="Enter your nature of Business"
                    value={values.nature_type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.nature_type && touched.nature_type ? (
                    <p className="form-error text-danger">
                      {errors.nature_type}
                    </p>
                  ) : null}
                </div>
              </div>
            )}
            {employeeType == "Select_Option" ? null : (
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmploymentType;
