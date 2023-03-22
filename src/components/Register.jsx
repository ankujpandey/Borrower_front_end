import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { validationSchema, initialValues } from "../schemas";
import axios from "axios";

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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h2>Registration Form</h2>
          <form className="col-md-6 my-5" onSubmit={formik.handleSubmit}>
            <label className="col-form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.firstName && formik.touched.firstName ? (
              <div className="form-error">{formik.errors.firstName}</div>
            ) : null}

            {/* add css for class form-error */}

            <label className="col-form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <label className="col-form-label">Contact</label>
            <input
              type="text"
              className="form-control"
              name="Contact"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.Contact && formik.touched.Contact ? (
              <div className="form-error">{formik.errors.Contact}</div>
            ) : null}

            <label className="col-form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.Email && formik.touched.Email ? (
              <div className="form-error">{formik.errors.Email}</div>
            ) : null}

            <label className="col-form-label">PAN</label>
            <input
              type="text"
              className="form-control"
              name="PAN"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.PAN && formik.touched.PAN ? (
              <div className="form-error">{formik.errors.PAN}</div>
            ) : null}

            <label className="col-form-label">Aadhar</label>
            <input
              type="text"
              className="form-control"
              name="Aadhar"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.Aadhar && formik.touched.Aadhar ? (
              <div className="form-error">{formik.errors.Aadhar}</div>
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
              onBlur={formik.handleBlur}
            />
            {formik.errors.City && formik.touched.City ? (
              <div className="form-error">{formik.errors.City}</div>
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
              onBlur={formik.handleBlur}
            />
            {formik.errors.State && formik.touched.State ? (
              <div className="form-error">{formik.errors.State}</div>
            ) : null}

            <legend className="mt-5">Borrowing Requirements</legend>

            <label className="col-form-label">Rate of Interest</label>
            <select
              className="form-select"
              name="ROI"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.Amount && formik.touched.Amount ? (
              <div className="form-error">{formik.errors.Amount}</div>
            ) : null}

            <label className="col-form-label">Tenure(in months)</label>

            <input
              type="text"
              className="form-control"
              name="Tenure"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.Tenure && formik.touched.Tenure ? (
              <div className="form-error">{formik.errors.Tenure}</div>
            ) : null}

            <button type="submit" className="btn btn-primary mt-3">
              Proceed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
