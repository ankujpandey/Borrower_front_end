import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ApiCall } from "../functions/ApiCall";

function UserDetails(props) {
  const { id } = useParams();
  const [isData, setIsData] = useState(false);

  const [user, setUser] = useState([]);

  let [color, setColor] = useState("black");

  setColor = (status) => {
    status == 1 ? (color = "green") : (color = "red");
    return color;
  };

  const config = {
    method: "get",
    url: `http://localhost:4000/api/v1/getAllData/${id}`,
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await ApiCall(config);
    if (response.status === 201) {
      setIsData(true);
      console.log(response.data.data[0]);
      setUser(response?.data?.data[0]);
    } else {
      setIsData(false);
      // alert("Something went wrong!!!");
    }
  };

  if (!isData) {
    return <h1>No data available!!</h1>;
  }
  return (
    <div className="container border border-dark-subtle rounded my-4 p-3">
      <div className="row">
        <div className="col-md-12 p-4">
          <NavLink to="/admin-dashboard">
            <button type="submit" className="btn btn-light float-end col-2 ">
              Back
            </button>
          </NavLink>

          <h3 className="menu-title fs-1 mt-5 fw-bold">
            {user.firstName + " " + user.lastName}
          </h3>
          <div className="menu-text fs-5 fw-0 mb-3">{user.email}</div>
          <h6 className="menu-text fs-6 mb-1 fw-bold">Active Status</h6>
          <div
            className="menu-text fs-6 mt-0"
            style={{
              color: setColor(user.isActive),
            }}
          >
            {user.isActive == 1 ? "Yes" : "No"}
          </div>

          <hr />

          <h3 className="menu-title fs-3 mt-5 fw-bold">Personal Details</h3>

          <ul className="list-group ">
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.contact}
              <span className="float-end text-secondary">Contact</span>
            </li>
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.pan}
              <span className="float-end text-secondary">PAN</span>
            </li>
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.aadhaar}
              <span className="float-end text-secondary">Aadhaar</span>
            </li>
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.postOffice}
              <span className="float-end text-secondary">Area</span>
            </li>
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.city}
              <span className="float-end text-secondary">City</span>
            </li>
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.state}
              <span className="float-end text-secondary">State</span>
            </li>
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.pinCode}
              <span className="float-end text-secondary">Pin Code</span>
            </li>
          </ul>

          <hr />

          <h3 className="menu-title fs-3 mt-5 fw-bold">Employment Details</h3>

          <ul className="list-group ">
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.employment_type}
              <span className="float-end text-secondary">Employment Type</span>
            </li>
            {user.company_name ? (
              <li className="list-group-item">
                {/* <HiPhone className="icons" /> */}
                {user.company_name}
                <span className="float-end text-secondary">Company Name</span>
              </li>
            ) : null}
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.professional_email}
              <span className="float-end text-secondary">
                Professional Email
              </span>
            </li>
            {user.business_nature ? (
              <li className="list-group-item">
                {/* <HiPhone className="icons" /> */}
                {user.business_nature}
                <span className="float-end text-secondary">
                  Nature of Bussiness
                </span>
              </li>
            ) : null}
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.monthly_income}
              <span className="float-end text-secondary">Monthly Income</span>
            </li>
          </ul>

          <hr />

          <h3 className="menu-title fs-3 mt-5 fw-bold">Bank Details</h3>

          <ul className="list-group ">
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.account_number}
              <span className="float-end text-secondary">Account Number</span>
            </li>

            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.ifsc_code}
              <span className="float-end text-secondary">IFSC</span>
            </li>

            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.branch_name}
              <span className="float-end text-secondary">Branch</span>
            </li>

            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {user.bank_name}
              <span className="float-end text-secondary">Bank</span>
            </li>
          </ul>

          <hr />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
