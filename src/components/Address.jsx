import axios from "axios";
import React, { useEffect, useState } from "react";

function Address(props) {
  const [validPIN, setVaidPIN] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [postOffice, setPostOffice] = useState([]);
  const [PO, setPO] = useState("");

  useEffect(() => {
    fetchDistrict();
  }, [pinCode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("form submitted");
    console.log("Pin Code: ", pinCode);
    console.log("Post Office: ", PO);
    console.log("District: ", district);
    console.log("State: ", state);
  };

  const fetchDistrict = async () => {
    if (pinCode.length == 6) {
      setLoading(true);
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
          //   console.log(
          //     "District-->",
          //     response.data[0].PostOffice[0].District,
          //     ", State--->",
          //     response.data[0].PostOffice[0].State
          //   );
          // console.log(response.data[0].Status);
          setDistrict(response.data[0].PostOffice[0].District);
          setState(response.data[0].PostOffice[0].State);
          setPostOffice(response.data[0].PostOffice);
          setLoading(false);
          //   console.log("postOffice", response.data[0].PostOffice);
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
  return (
    <div className="container">
      <form className="col-md-6 my-5" onSubmit={(event) => handleSubmit(event)}>
        <label className="col-form-label">PIN Code</label>
        <input
          type="text"
          className="form-control"
          name="PinCode"
          onChange={(event) => {
            setPinCode(event.target.value);
          }}
          required
        />

        {/* Add CSS for class loading-msg */}
        {loading ? (
          <div className="loading-msg">Please Wait...</div>
        ) : pinCode.length != 6 ? null : validPIN ? null : (
          <div className="form-error">Enter valid PIN Code</div>
        )}

        {validPIN ? (
          <>
            <label className="col-form-label">Post Office</label>
            <select
              type="text"
              className="form-select"
              name="PostOffice"
              onChange={(event) => setPO(event.target.value)}
            >
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
          disabled
          value={district}
          onChange={(event) => {
            setDistrict(event.target.value);
          }}
        />

        <label className="col-form-label">State</label>
        <input
          type="text"
          className="form-control"
          name="State"
          disabled
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
        />

        {loading ? null : (
          <button type="submit" className="btn btn-success mt-3">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Address;
