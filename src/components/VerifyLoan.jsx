import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiCall } from "../functions/ApiCall";
import { UserContext } from "../context/UserContext";

function VerifyLoan(props) {
  const { token } = useContext(UserContext);
  const { id } = useParams();
  const [loanData, setLoanData] = useState();

  const config = {
    method: "get",
    url: `http://localhost:4000/api/v1/getLoan/${id}`,
    headers: { "Content-Type": "application/json", authorization: token },
  };

  useEffect(() => {
    fetchData();
  }, []);

  // -------------------------------------------
  //  Fetch User's all data
  // -------------------------------------------

  const fetchData = async () => {
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

  return (
    <div className="modal fade col-md-10" id="verifyLoan" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <form
              //   onSubmit={handleSubmit}
              className="needs-validation"
              noValidate
            >
              <div className="row justify-content-center g-3 m-3 mb-4">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      className={
                        "form-control"
                        // ${
                        //   errors.rate_of_interest && touched.rate_of_interest
                        //     ? "is-invalid"
                        //     : touched.rate_of_interest
                        //     ? "is-valid"
                        //     : ""
                        // }
                      }
                      name="rate_of_interest"
                      id="rate_of_interest"
                      placeholder="Rate of Interest"
                      //   value={loanData.rate_of_interest}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                    <label htmlFor="rate_of_interest">Rate of Interest</label>
                    {/* {errors.rate_of_interest && touched.rate_of_interest ? (
                        <div className="form-error form-validation-warning text-danger">
                          {errors.rate_of_interest}
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
                        //   errors.amount && touched.amount
                        //     ? "is-invalid"
                        //     : touched.amount
                        //     ? "is-valid"
                        //     : ""
                        // }
                      }
                      name="amount"
                      id="amount"
                      placeholder="amount"
                      //   value={loanData.amount}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                    <label htmlFor="amount">Amount</label>
                    {/* {errors.amount && touched.amount ? (
                        <div className="form-error form-validation-warning text-danger">
                          {errors.amount}
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
                        //   errors.tenure && touched.tenure
                        //     ? "is-invalid"
                        //     : touched.tenure
                        //     ? "is-valid"
                        //     : ""
                        // }
                      }
                      name="tenure"
                      id="tenure"
                      placeholder="tenure"
                      //   value={loanData.tenure}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                    <label htmlFor="tenure">Tenure(in months)</label>
                    {/* {errors.tenure && touched.tenure ? (
                        <div className="form-error form-validation-warning text-danger">
                          {errors.tenure}
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
  );
}

export default VerifyLoan;
