import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHandleValidation } from "../../hooks/useHandleValidation";
import { BankSchema, BankInitialValues } from "../../schemas";
import { Icons } from "../../icons/Icons";
import { UserContext } from "../../contextAPI/UserContext";

function BankDetails(props) {
  const { user, token } = useContext(UserContext);

  console.log(token);

  const url = "/pancard";
  const api = "http://localhost:4000/api/v1/createBank";

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(BankInitialValues, BankSchema, url, api, token);

  values.uid = user?.signUp?.uid;

  const [validIFSC, setValidIFSC] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBank();
  }, [values.ifsc_code]);

  const fetchBank = async () => {
    if (values.ifsc_code.length === 11) {
      setValidIFSC(true);
      setLoading(true);

      try {
        const response = await axios.get(
          "https://ifsc.razorpay.com/" + values.ifsc_code,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          values.bank_name = response.data.BANK;
          values.branch_name = response.data.BRANCH;
          setLoading(false);
        }
      } catch (error) {
        setValidIFSC(false);
        setLoading(false);
      }
    }
  };

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
          Bank Details
        </h6>
        <h2 className="mt-2">Please enter the following details...</h2>
      </div>

      <div className="container px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <form
                action=""
                onSubmit={handleSubmit}
                className="needs-validation"
                noValidate
              >
                <div className="row justify-content-center g-3 m-3 mb-4">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.account_number && touched.account_number
                            ? "is-invalid"
                            : touched.account_number
                            ? "is-valid"
                            : ""
                        }`}
                        name="account_number"
                        id="account_number"
                        placeholder="Account Number"
                        value={values.account_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label className="col-form-label">Account Number</label>
                      {errors.account_number && touched.account_number ? (
                        <div className="form-error form-validation-warning text-danger">
                          {errors.account_number}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${
                          (errors.ifsc_code || !validIFSC) && touched.ifsc_code
                            ? "is-invalid"
                            : touched.ifsc_code
                            ? "is-valid"
                            : ""
                        }`}
                        name="ifsc_code"
                        id="ifsc_code"
                        placeholder="IFSC Code"
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        onBlur={handleBlur}
                      />
                      <label className="col-form-label">IFSC Code</label>

                      {errors.ifsc_code && touched.ifsc_code ? (
                        <div className="form-error form-validation-warning text-danger">
                          {errors.ifsc_code}
                        </div>
                      ) : null}

                      {values.ifsc_code.length !==
                      11 ? null : validIFSC ? null : (
                        <div className="form-error form-validation-warning text-danger">
                          Enter valid IFSC
                        </div>
                      )}
                    </div>
                  </div>

                  {loading ? (
                    <div className="loading-msg">Please wait...</div>
                  ) : validIFSC ? (
                    <>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            name="bank_name"
                            value={values.bank_name}
                            disabled
                          />
                          <label className="col-form-label">Bank Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            name="branch_name"
                            value={values.branch_name}
                            disabled
                          />
                          <label className="col-form-label">Branch</label>
                        </div>
                      </div>
                      <div className="col-4">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 py-3 btn-primary"
                        >
                          Next{Icons.next}
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankDetails;
