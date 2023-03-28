import React, { useEffect, useState } from "react";
import axios from "axios"; //npm i axios
import { Link } from "react-router-dom";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { validationSchema, initialValues } from "../schemas";

function Register(props) {
  const [validPIN, setVaidPIN] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [postOffice, setPostOffice] = useState([]);

  useEffect(() => {
    fetchDistrict();
  }, [pinCode]);

  const fetchDistrict = async () => {
    if (pinCode.length == 6) {
      // console.log(pinCode);
      try {
        const response = await axios.get(
          "https://api.postalpincode.in/pincode/" + pinCode,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data[0].Status === "Success") {
          setVaidPIN(true);
          console.log(
            "District-->",
            response.data[0].PostOffice[0].District,
            ", State--->",
            response.data[0].PostOffice[0].State
          );
          // console.log(response.data[0].Status);
          setDistrict(response.data[0].PostOffice[0].District);
          setState(response.data[0].PostOffice[0].State);
          setPostOffice(response.data[0].PostOffice);
          console.log("postOffice", response.data[0].PostOffice);
        } else {
          setVaidPIN(false);
          console.log("Something went wrong");
        }
      } catch (error) {
        setVaidPIN(false);
        console.log("Something went wrong");
      }
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(initialValues, validationSchema);

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
              onChange={(event) => {
                setPinCode(event.target.value);
              }}
              required
            />

            {pinCode.length != 6 ? null : validPIN ? null : (
              <div className="form-error">Enter valid PIN Code</div>
            )}

            {validPIN ? (
              <>
                <label className="col-form-label">Post Office</label>
                <select type="text" className="form-select" name="PostOffice">
                  <option>Please select your area Post Office</option>

                  {postOffice.map((area, index) => {
                    return (
                      <option key={index} value={area.Name}>
                        {area.Name}
                      </option>
                    );
                  })}
                </select>
              </>
            ) : null}

            <label className="col-form-label">District</label>
            <input
              type="text"
              className="form-control"
              name="District"
              value={district}
              onChange={(event) => {
                setDistrict(event.target.value);
              }}
              onBlur={handleBlur}
            />
            {errors.District && touched.District ? (
              <div className="form-error">{errors.District}</div>
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
              value={values.ROI}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {/* You can add the interest rates acording to you */}
              <option>Please select the rate of interest</option>
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

            <Link to="/register2">
              <button
                type="submit"
                className="btn btn-primary mt-3"
                // onClick={handleSubmit}
              >
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
