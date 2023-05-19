import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { AmountInitialValue, AmountSchema } from "../schemas";
import axios from "axios";

function TransferBorrowerMoneyModal({ wallet }) {
  const { token } = useContext(UserContext);

  const url = "/dashboard";
  const api = "http://localhost:4000/api/v1/createBorrowerTransaction";

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(AmountInitialValue, AmountSchema, url, api, token);

  values.uid = wallet?.uid;
  values.LoanID = wallet?.LoanId;
  values.txn_type = "transfer to account";
  values.credit_Amount = 0;

  // Fetching bank details

  useEffect(() => {
    fetchBank();
  }, [values.ifsc_code]);

  const [validIFSC, setValidIFSC] = useState(false);
  const [loading, setLoading] = useState(false);

  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");

  const fetchBank = async () => {
    if (values.ifsc_code.length == 11) {
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
          setBank(response.data.BANK);
          setBranch(response.data.BRANCH);
          setLoading(false);
        }
      } catch (error) {
        setValidIFSC(false);
        setLoading(false);
      }
    }
  };

  return (
    <div className="modal fade" id="transferMoney" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-border-deign m-3">
              <div className="row justify-content-center g-3 m-3">
                <div
                  className="modal-heading"
                  style={{ marginRight: "5.2rem", width: "311px" }}
                >
                  Transfer money from Wallet
                </div>

                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="needs-validation"
                  noValidate
                >
                  <div className="row justify-content-center g-3 mb-2">
                    <div className="col-12">
                      <div className="form-floating mt-3">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.debit_Amount && touched.debit_Amount
                              ? "is-invalid"
                              : touched.debit_Amount
                              ? "is-valid"
                              : ""
                          }`}
                          name="debit_Amount"
                          id="debit_Amount"
                          placeholder="debit_Amount"
                          value={values.debit_Amount}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="debit_Amount">Amount</label>
                        {errors.debit_Amount && touched.debit_Amount ? (
                          <div className="form-error form-validation-warning text-danger">
                            {errors.debit_Amount}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-12">
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
                          placeholder="account_number"
                          value={values.account_number}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="account_number">Account Number</label>
                        {errors.account_number && touched.account_number ? (
                          <div className="form-error form-validation-warning text-danger">
                            {errors.account_number}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.ifsc_code && touched.ifsc_code
                              ? "is-invalid"
                              : touched.ifsc_code
                              ? "is-valid"
                              : ""
                          }`}
                          name="ifsc_code"
                          id="ifsc_code"
                          placeholder="ifsc_code"
                          value={values.ifsc_code}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="ifsc_code">IFSC Code</label>
                        {errors.ifsc_code && touched.ifsc_code ? (
                          <div className="form-error form-validation-warning text-danger">
                            {errors.ifsc_code}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {validIFSC && !loading ? (
                      <>
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="disabled"
                              className="form-control"
                              name="bank"
                              id="bank"
                              placeholder="bank"
                              value={bank}
                              disabled
                            />
                            <label htmlFor="ifsc_code">Bank Name</label>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="disabled"
                              className="form-control"
                              name="branch"
                              id="branch"
                              placeholder="branch"
                              value={branch}
                              disabled
                            />
                            <label htmlFor="ifsc_code">Branch Name</label>
                          </div>
                        </div>
                      </>
                    ) : null}

                    <div className="d-flex justify-content-end">
                      <div className="col-5">
                        <button
                          type="submit"
                          className="btn btn-primary rounded-pill w-100 py-2 btn-primary"
                          onClick={() => {
                            window.location = "/dashboard";
                          }}
                        >
                          Transfer
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferBorrowerMoneyModal;
