import React, { useEffect, useState } from "react";
import axios from "axios"; //npm i axios
import { Link } from "react-router-dom";
import { useHandleValidation } from "../hooks/useHandleValidation";

function Register(props) {
  const [validPIN, setVaidPIN] = useState(true);
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    fetchCity();
  }, [pinCode]);

  const fetchCity = async () => {
    if (pinCode.length == 6) {
      setVaidPIN(true);
      console.log(pinCode);
      const response = await axios.get(
        "https://api.postalpincode.in/pincode/" + pinCode,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data[0].Status === "Success") {
        console.log(
          "City-->",
          response.data[0].PostOffice[0].District,
          ", State--->",
          response.data[0].PostOffice[0].State
        );
        // console.log(response.data[0].Status);
        setCity(response.data[0].PostOffice[0].District);
        setState(response.data[0].PostOffice[0].State);
      } else {
        setVaidPIN(false);
        console.log("Something went wrong");
      }
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation();

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h2>Registration Form</h2>
          <form className="col-md-6 my-5" onSubmit={handleSubmit}>
            <label className="col-form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName ? (
              <div className="form-error">{errors.firstName}</div>
            ) : null}

            {/* add css for class form-error */}

            <label className="col-form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <label className="col-form-label">Contact</label>
            <input
              type="text"
              className="form-control"
              name="Contact"
              value={values.Contact}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Contact && touched.Contact ? (
              <div className="form-error">{errors.Contact}</div>
            ) : null}

            <label className="col-form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="Email"
              value={values.Email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Email && touched.Email ? (
              <div className="form-error">{errors.Email}</div>
            ) : null}

            <label className="col-form-label">PAN</label>
            <input
              type="text"
              className="form-control"
              name="PAN"
              value={values.PAN}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.PAN && touched.PAN ? (
              <div className="form-error">{errors.PAN}</div>
            ) : null}

            <label className="col-form-label">Aadhar</label>
            <input
              type="text"
              className="form-control"
              name="Aadhar"
              value={values.Aadhar}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Aadhar && touched.Aadhar ? (
              <div className="form-error">{errors.Aadhar}</div>
            ) : null}

            <label className="col-form-label">PIN Code</label>
            <input
              type="text"
              className="form-control"
              name="PINCode"
              value={values.firstName}
              onChange={(event) => {
                setPinCode(event.target.value);
              }}
              required
            />
            {validPIN ? null : (
              <div className="form-error">Enter valid PIN Code</div>
            )}

            <label className="col-form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="City"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
              onBlur={handleBlur}
            />
            {errors.City && touched.City ? (
              <div className="form-error">{errors.City}</div>
            ) : null}

            <label className="col-form-label">State</label>
            <input
              type="text"
              className="form-control"
              name="State"
              value={state}
              onChange={(event) => {
                setState(event.target.value);
              }}
              onBlur={handleBlur}
            />
            {errors.State && touched.State ? (
              <div className="form-error">{errors.State}</div>
            ) : null}

            <legend className="mt-5">Borrowing Requirements</legend>

            <label className="col-form-label">Rate of Interest</label>
            <select
              className="form-select"
              name="ROI"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {/* You can add the interest rates acording to you */}
              <option defaultValue>Please select the rate of interest</option>
              <option value={5}>5 %</option>
              <option value={8}>8 %</option>
              <option value={10}>10 %</option>
            </select>

            <label className="col-form-label">Amount</label>
            <input
              type="text"
              className="form-control"
              name="Amount"
              value={values.Amount}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Amount && touched.Amount ? (
              <div className="form-error">{errors.Amount}</div>
            ) : null}

            <label className="col-form-label">Tenure(in months)</label>

            <input
              type="text"
              className="form-control"
              name="Tenure"
              value={values.Tenure}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Tenure && touched.Tenure ? (
              <div className="form-error">{errors.Tenure}</div>
            ) : null}

            <Link to="/register3">
              <button type="submit" className="btn btn-primary mt-3">
                Proceed
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
