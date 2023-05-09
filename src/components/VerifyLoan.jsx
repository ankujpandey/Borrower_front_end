import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiCall } from "../functions/ApiCall";
import { UserContext } from "../context/UserContext";
import { BorrowingInitialValues, BorrowingSchema } from "../schemas";
import { useHandleValidation } from "../hooks/useHandleValidation";

function VerifyLoan(props) {
  const { token } = useContext(UserContext);
  const { id } = useParams();
  const [loanData, setLoanData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  // -------------------------------------------
  //  Fetch User's all data
  // -------------------------------------------

  const fetchData = async () => {
    const config = {
      method: "get",
      url: `http://localhost:4000/api/v1/getLoan/${id}`,
      headers: { "Content-Type": "application/json", authorization: token },
    };
    console.log(id);
    let response = await ApiCall(config);
    if (response.status === 201) {
      console.log("user data--->", response.data.data);
      setLoanData(response?.data?.data);
    } else {
      //   setIsData(false);
      alert("Something went wrong!!!");
    }
  };

  // -------------------------------
  // Submit updated loan details
  // -------------------------------

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(
      BorrowingInitialValues,
      BorrowingSchema,
      // url,
      // api,
      token
    );

  return (
    <div className="container px-lg-5">
      <div className="row justify-content-center">
        <div className="col-lg-11 mt-4">
          <div
            className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-10 m-5 ">
              <h5 className="menu-title fs-3 fw-bold mb-3">
                Loan Requirements provided by the user...
              </h5>
              <table className="table-without-line">
                <tr className="mr-2">
                  <th>
                    <p>Amount required: </p>
                  </th>
                  <td>Rs. {loanData.amountAsked}</td>
                </tr>
                <tr className="mr-2">
                  <th>
                    <p>Tenure: </p>
                  </th>
                  <td>{loanData.tenureAsked} months</td>
                </tr>
                <tr className="mr-2">
                  <th>
                    <p>Rate of Interest Expected:</p>
                  </th>
                  <td>{loanData.roiAsked} %</td>
                </tr>
              </table>

              <form
                //   onSubmit={handleSubmit}
                className="needs-validation"
                noValidate
              >
                <h5 className="menu-title fs-3 fw-bold my-3">
                  Loan Available for the user
                </h5>
                <div className="row justify-content-center g-3 m-3 mb-4">
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        className={`form-control
                          ${
                            errors.minRoiApproved && touched.minRoiApproved
                              ? "is-invalid"
                              : touched.minRoiApproved
                              ? "is-valid"
                              : ""
                          }`}
                        name="minRoiApproved"
                        id="minRoiApproved"
                        placeholder="Rate of Interest"
                        //   value={loanData.minRoiApproved}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="minRoiApproved">Rate of Interest</label>
                      {/* {errors.minRoiApproved && touched.minRoiApproved ? (
                        <div className="form-error form-validation-warning text-danger">
                          {errors.minRoiApproved}
                        </div>
                      ) : null} */}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control
                          // ${
                            errors.amountApproved && touched.amountApproved
                              ? "is-invalid"
                              : touched.amountApproved
                              ? "is-valid"
                              : ""
                          }`}
                        name="amountApproved"
                        id="amountApproved"
                        placeholder="amountApproved"
                        //   value={loanData.amountApproved}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="amountApproved">
                        Amount to be approved
                      </label>
                      {/* {errors.amountApproved && touched.amountApproved ? (
                        <div className="form-error form-validation-warning text-danger">
                          {errors.amountApproved}
                        </div>
                      ) : null} */}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={
                          "form-control"
                          // ${
                          //   errors.tenureApproved && touched.tenureApproved
                          //     ? "is-invalid"
                          //     : touched.tenureApproved
                          //     ? "is-valid"
                          //     : ""
                          // }
                        }
                        name="tenureApproved"
                        id="tenureApproved"
                        placeholder="tenureApproved"
                        //   value={loanData.tenureApproved}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="tenureApproved">Tenure(in months)</label>
                      {/* {errors.tenureApproved && touched.tenureApproved ? (
                        <div className="form-error form-validation-warning text-danger">
                          {errors.tenureApproved}
                        </div>
                      ) : null} */}
                    </div>
                  </div>
                  <div className="col-4">
                    <button
                      // type="submit"
                      className="btn btn-primary w-100 py-3 btn-primary"
                    >
                      Revert Back
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyLoan;
