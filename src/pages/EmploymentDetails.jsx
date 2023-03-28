import React, { useState } from "react";
import SalariedEmployee from "../components/SalariedEmployee";
import SelfEmployed from "../components/SelfEmployed";

function EmploymentDetails(props) {
  const [employmentType, setEmploymentType] = useState("none");

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div>
            <label htmlFor="emp_type">Choose Employment Type:</label>
            <select
              className="form-select"
              name="emp_type"
              id="emp_type"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
            >
              <option value="none">Select Option</option>
              <option value="Salaried">Salaried</option>
              <option value="SelfEmployed">Self Employed</option>
            </select>
          </div>

          {/* component called on the basis of selected employment type */}
          {employmentType == "none" ? null : employmentType == "Salaried" ? (
            <SalariedEmployee />
          ) : (
            <SelfEmployed />
          )}
        </div>
      </div>
    </div>
  );
}

export default EmploymentDetails;
