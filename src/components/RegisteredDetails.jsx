import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ApiCall } from "../functions/ApiCall";
import { NavLink } from "react-router-dom";

function RegisteredDetails(props) {
  const { user } = useContext(UserContext);

  const [userData, setUserData] = useState([]);

  const config = {
    method: "get",
    url: `http://localhost:4000/api/v1/getAllData/${user?.userName?.uid}`,
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await ApiCall(config);
    if (response.status === 201) {
      console.log(response.data.data[0]);
      setUserData(response?.data?.data[0]);
    } else {
      alert("Something went wrong!!!");
    }
  };

  return (
    <div className="container border border-dark-subtle rounded my-4 p-3">
      <div className="row">
        <div className="col-md-12 p-4">
          <h3 className="menu-title fs-1 mt-5 fw-bold">
            {userData?.firstName + " " + userData?.lastName}
          </h3>
          <div className="menu-text fs-5 fw-0 mb-3">{userData?.email}</div>

          <hr />

          <h3 className="menu-title fs-3 mt-5 fw-bold">Personal Details</h3>

          <ul className="list-group ">
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {userData?.contact}
              <span className="float-end text-secondary">Contact</span>
            </li>
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {userData?.pan}
              <span className="float-end text-secondary">PAN</span>
            </li>
            <li className="list-group-item">
              {/* <HiPhone className="icons" /> */}
              {userData?.aadhaar}
              <span className="float-end text-secondary">Aadhaar</span>
            </li>

            {userData?.postOffice ? (
              <>
                <li className="list-group-item">
                  {/* <HiPhone className="icons" /> */}
                  {userData?.postOffice}
                  <span className="float-end text-secondary">Area</span>
                </li>
                <li className="list-group-item">
                  {/* <HiPhone className="icons" /> */}
                  {userData?.city}
                  <span className="float-end text-secondary">City</span>
                </li>
                <li className="list-group-item">
                  {/* <HiPhone className="icons" /> */}
                  {userData?.state}
                  <span className="float-end text-secondary">State</span>
                </li>
                <li className="list-group-item">
                  {/* <HiPhone className="icons" /> */}
                  {userData?.pinCode}
                  <span className="float-end text-secondary">Pin Code</span>
                </li>

                <hr className="mt-5 mb-0" />

                {userData?.employment_type ? (
                  <>
                    <h3 className="menu-title fs-3 mt-5 fw-bold">
                      Employment Details
                    </h3>
                    <ul className="list-group ">
                      <li className="list-group-item">
                        {/* <HiPhone className="icons" /> */}
                        {userData?.employment_type}
                        <span className="float-end text-secondary">
                          Employment Type
                        </span>
                      </li>
                      {userData?.company_name ? (
                        <li className="list-group-item">
                          {/* <HiPhone className="icons" /> */}
                          {userData?.company_name}
                          <span className="float-end text-secondary">
                            Company Name
                          </span>
                        </li>
                      ) : null}
                      <li className="list-group-item">
                        {/* <HiPhone className="icons" /> */}
                        {userData?.professional_email}
                        <span className="float-end text-secondary">
                          Professional Email
                        </span>
                      </li>
                      {userData?.business_nature ? (
                        <li className="list-group-item">
                          {/* <HiPhone className="icons" /> */}
                          {userData?.business_nature}
                          <span className="float-end text-secondary">
                            Nature of Bussiness
                          </span>
                        </li>
                      ) : null}
                      <li className="list-group-item">
                        {/* <HiPhone className="icons" /> */}
                        {userData?.monthly_income}
                        <span className="float-end text-secondary">
                          Monthly Income
                        </span>
                      </li>
                    </ul>

                    <hr className="mt-5 mb-0" />

                    {userData?.account_number ? (
                      <>
                        <h3 className="menu-title fs-3 mt-5 fw-bold">
                          Bank Details
                        </h3>

                        <ul className="list-group ">
                          <li className="list-group-item">
                            {/* <HiPhone className="icons" /> */}
                            {userData?.account_number}
                            <span className="float-end text-secondary">
                              Account Number
                            </span>
                          </li>

                          <li className="list-group-item">
                            {/* <HiPhone className="icons" /> */}
                            {userData?.ifsc_code}
                            <span className="float-end text-secondary">
                              IFSC
                            </span>
                          </li>

                          <li className="list-group-item">
                            {/* <HiPhone className="icons" /> */}
                            {userData?.branch_name}
                            <span className="float-end text-secondary">
                              Branch
                            </span>
                          </li>

                          <li className="list-group-item">
                            {/* <HiPhone className="icons" /> */}
                            {userData?.bank_name}
                            <span className="float-end text-secondary">
                              Bank
                            </span>
                          </li>
                        </ul>

                        <div className="btn w-100 py-3 btn-primary mt-5">
                          Registration completed!
                        </div>
                      </>
                    ) : (
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-5 d-flex mt-3">
                          <div
                            className="col-10 card wow fadeInUp"
                            data-wow-delay="0.3s"
                          >
                            <NavLink to="/bank-details">
                              <button
                                type="submit"
                                className="btn btn-primary w-100 py-3 btn-primary"
                              >
                                Continue Registration
                              </button>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-5 d-flex mt-3">
                      <div
                        className="col-10 card wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <NavLink to="/employment-details">
                          <button
                            type="submit"
                            className="btn btn-primary w-100 py-3 btn-primary"
                          >
                            Continue Registration
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="row d-flex justify-content-center">
                <div className="col-lg-5 d-flex mt-3">
                  <div
                    className="col-10 card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <NavLink to="/address">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-3 btn-primary"
                      >
                        Continue Registration
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RegisteredDetails;
