import React, { useContext, useState } from "react";
import { Icons } from "../../icons/Icons";
import { ApiCall } from "../../functions/ApiCall";
import { UserContext } from "../../contextAPI/UserContext";

function LoanDisbursement({ user, setLoanDisburse }) {
  const [loading, setLoading] = useState(false);
  const { token } = useContext(UserContext);

  const [lowBalance, setLowBalance] = useState(false);

  console.log(user);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const data = {
        uid: user.uid,
        Loan_state: 1600,
        amount: user.amountApproved,
        LoanID: user.LoanId,
        jobAssignees_id: user.jobAssignees_id,
      };

      const config = {
        method: "post",
        url: "http://localhost:4000/api/v1/disburseLoan",
        headers: { "Content-Type": "application/json", authorization: token },
        data: data,
      };

      let response = await ApiCall(config);
      if (response.status === 201) {
        setLoading(false);
        setLoanDisburse(false);
      } else if (response.response.status === 503) {
        setLoading(false);
        console.log("Balance Low");
        setLowBalance(true);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <div
        className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h6 className="position-relative d-inline text-primary ps-4">
          Loan Disbursement
        </h6>
      </div>

      <div className="container px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-11 mt-4">
            <div
              className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row">
                <div className="col-md-12 p-4">
                  <button
                    className="btn btn-light float-end col-2 "
                    onClick={() => {
                      setLoanDisburse(false);
                    }}
                  >
                    Back
                  </button>

                  <div className="d-flex justify-content-start align-items-center mt-5">
                    <div className="ms-3">
                      <h3 className="menu-title fs-1 fw-bold">
                        {user.firstName + " " + user.lastName}
                      </h3>
                      <div className="menu-text fs-5 fw-0 mb-2">
                        {user.email}
                      </div>
                    </div>
                  </div>

                  <hr className="mb-3" />

                  {/* -------------------------------------------------
							Borrower's requirement Section
					-----------------------------------------------------*/}

                  <div className="row justify-content-center g-3 m-2 mb-4">
                    <div className={`${loading ? "loader" : ""}`}></div>
                    <h3 className="menu-title fs-3 mt-4 fw-bold">
                      Approved Loan
                    </h3>

                    <div className={`col-md-12 ${loading ? "row-loader" : ""}`}>
                      <div className="form-floating">
                        <input
                          type="text"
                          className={"form-control"}
                          name="amount"
                          id="amount"
                          placeholder="Amount Approved"
                          value={`${user.amountApproved}`}
                          disabled
                        />
                        <label htmlFor="amount">Amount</label>
                      </div>
                    </div>

                    <div className={`col-md-12 ${loading ? "row-loader" : ""}`}>
                      <div className="form-floating">
                        <input
                          className={"form-control"}
                          name="rate_of_interest"
                          id="rate_of_interest"
                          placeholder="Rate of Interest Approved"
                          value={`${user.minRoiApproved} %`}
                          disabled
                        />
                        <label htmlFor="rate_of_interest">
                          Rate of Interest
                        </label>
                      </div>
                    </div>

                    <div className={`col-md-12 ${loading ? "row-loader" : ""}`}>
                      <div className="form-floating">
                        <input
                          type="text"
                          className={"form-control"}
                          name="tenure"
                          id="tenure"
                          placeholder="Tenure (in months)"
                          value={`${user.tenureApproved} months`}
                          disabled
                        />
                        <label htmlFor="tenure">Tenure</label>
                      </div>
                      <div
                        className={`col-md-12 ${loading ? "row-loader" : ""}`}
                      >
                        {lowBalance ? (
                          <div className="form-floating mt-3">
                            <div
                              className="alert alert-danger m-0"
                              role="alert"
                            >
                              {Icons.error}
                              <div className="mt-0 ">
                                Currently the balance in pool is low. So the
                                loan can't be disbursed.
                                <br />
                                Please try again later!
                              </div>
                            </div>
                          </div>
                        ) : null}
                        <div className="row mt-4 justify-content-center">
                          <button
                            className="btn col-3 btn-primary w-20 py-3 btn-primary"
                            onClick={() => {
                              handleSubmit();
                            }}
                            disabled={loading || lowBalance}
                          >
                            {Icons.salary} Disburse Loan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoanDisbursement;
