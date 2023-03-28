import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { BankSchema, BankInitialValues } from "../schemas";

function Register4(props) {
  const [validIFSC, setValidIFSC] = useState(false);
  const [IFSC, setIFSC] = useState("");
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBank();
  }, [IFSC]);

  const fetchBank = async () => {
    if (IFSC.length == 11) {
      setValidIFSC(true);
      // console.log(IFSC);
      setLoading(true);

      try {
        const response = await axios.get("https://ifsc.razorpay.com/" + IFSC, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // console.log("+++++++++++", response.data);
        if (response.status === 200) {
          // console.log(
          //   "Branch--> ",
          //   response.data.BRANCH,
          //   ", Bank---> ",
          //   response?.data?.BANK
          // );
          values.Bank = response.data.BANK;
          values.Branch = response.data.BRANCH;
          values.IFSC = IFSC;
          setBank(response.data.BANK);
          setBranch(response.data.BRANCH);
          setLoading(false);
        }
      } catch (error) {
        // console.log("Error geting---", error.response.data);
        setValidIFSC(false);
      }
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(BankInitialValues, BankSchema);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h2>Registration Form</h2>
          <form className="col-md-6 my-5" onSubmit={handleSubmit}>
            <label className="col-form-label">Account Number</label>
            <input
              type="text"
              className="form-control"
              name="AccountNumber"
              value={values.AccountNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.AccountNumber && touched.AccountNumber ? (
              <div className="form-error">{errors.AccountNumber}</div>
            ) : null}

            {/* add css for class form-error */}

            <label className="col-form-label">IFSC Code</label>
            <input
              type="text"
              className="form-control"
              name="IFSC"
              onChange={(event) => {
                setIFSC(event.target.value);
              }}
              required
            />

            {/* Add CSS for class form-error */}
            {IFSC.length != 11 ? null : validIFSC ? null : (
              <div className="form-error">Enter valid IFSC</div>
            )}

            {loading ? (
              <div className="loading-msg">Please wait...</div>
            ) : validIFSC ? (
              <>
                <label className="col-form-label">Bank Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Bank"
                  value={bank}
                  disabled
                />

                <label className="col-form-label">Branch</label>
                <input
                  type="text"
                  className="form-control"
                  name="Branch"
                  value={branch}
                  disabled
                />

                {/* <Link to="/dashboard"> */}
                <button type="submit" className="btn btn-success mt-3">
                  Submit
                </button>
                {/* </Link> */}
              </>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register4;
