import React, { useState } from "react";
import SalariedEmployee from "../../components/RegistrationComponents/SalariedEmployee";
import SelfEmployed from "../../components/RegistrationComponents/SelfEmployed";

function EmploymentDetails(props) {
  const [employmentType, setEmploymentType] = useState("none");

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
          Employment Information
        </h6>
        <h2 className="mt-2">Please enter the following details...</h2>
      </div>

      <div className="container px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div
              className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row justify-content-center g-3 m-3 mb-4">
                <div className="col-12">
                  <div className="form-floating">
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
                    <label htmlFor="emp_type">Employment Type</label>
                  </div>
                </div>
              </div>

              {/* component called on the basis of selected employment type */}
              {employmentType === "none" ? null : employmentType ===
                "Salaried" ? (
                <SalariedEmployee />
              ) : (
                <SelfEmployed />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmploymentDetails;
