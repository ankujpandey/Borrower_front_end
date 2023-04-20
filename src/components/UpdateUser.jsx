import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiCall } from "../functions/ApiCall";

function UpdateUser(props) {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  console.log("id", id);

  useEffect(() => {
    fetchData();
  }, []);

  // -------------------------------------------
  //  Fetch User's all data
  // -------------------------------------------

  const config = {
    method: "get",
    url: `http://localhost:4000/api/v1/getAllData/${id}`,
    headers: { "Content-Type": "application/json" },
  };

  const fetchData = async () => {
    let response = await ApiCall(config);
    if (response.status === 201) {
      //   setIsData(true);
      console.log("user data--->", response.data.data[0]);
      localStorage.setItem(
        "userDetails",
        JSON.stringify(response.data.data[0])
      );
      setUser(response?.data?.data[0]);
    } else {
      //   setIsData(false);
      alert("Something went wrong!!!");
    }
  };

  return (
    <div className="modal fade" id="updateUser" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title fs-5" id="exampleModalLabel">
              Update User
            </h3>
          </div>
          <div className="modal-body">
            <form
            // onSubmit={(event) => handleSubmit(event)}
            >
              <h3 className="modal-title mb-4 fs-5" id="exampleModalLabel">
                Personal Details
              </h3>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  value={user.firstName + " " + user.lastName}
                  disabled
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  value={user.email}
                  disabled
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.contact}
                  name="contact"
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">PAN</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.pan}
                  name="contact"
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Aadhaar</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.aadhaar}
                  name="contact"
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={
                    user.postOffice +
                    ", " +
                    user.city +
                    ", " +
                    user.state +
                    ", " +
                    user.pinCode
                  }
                  name="contact"
                  //   onChange={(event) => handleChange(event)}
                />
              </div>
              <hr />

              <h3 className="modal-title mb-4 fs-5" id="exampleModalLabel">
                Employment Details
              </h3>
              <div className="mb-3">
                <label className="form-label">Employment Type</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  value={user.employment_type}
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Professional Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  value={user.professional_email}
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">
                  {user.business_nature ? "Nature of business" : "Company Name"}
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={
                    user.business_nature
                      ? user.business_nature
                      : user.company_name
                  }
                  name="company_name"
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Monthly Income</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.monthly_income}
                  name="contact"
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <hr />

              <h3 className="modal-title mb-4 fs-5" id="exampleModalLabel">
                Bank Details
              </h3>
              <div className="mb-3">
                <label className="form-label">Account Number</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  value={user.account_number}
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">IFSC</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  value={user.ifsc_code}
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Branch</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  value={user.branch_name}
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Bank</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  value={user.bank_name}
                  //   onChange={(event) => handleChange(event)}
                />
              </div>

              <hr />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
