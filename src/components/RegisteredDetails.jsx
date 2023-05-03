import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ApiCall } from "../functions/ApiCall";
import { NavLink } from "react-router-dom";
import { Icons } from "../icons/Icons";

function RegisteredDetails(loanStatus) {
  const { user, token } = useContext(UserContext);
  const [userImage, setUserImage] = useState();
  const [userData, setUserData] = useState([]);

  const config = {
    method: "get",
    url: `http://localhost:4000/api/v1/getAllData/${user?.userName?.uid}`,
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    fetchData();
    fetchImage();
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

  // ------------------------------------------
  //  Ftech User's Image
  // ------------------------------------------

  const fetchImage = async () => {
    const con = {
      method: "get",
      url: `http://localhost:4000/api/v1/getImage/${user?.userName?.uid}`,
      headers: { "Content-Type": "application/json", authorization: token },
    };

    let response = await ApiCall(con);
    if (response.status === 201) {
      // console.log(response.data.data[0].profile_photo);
      await setUserImage(response?.data?.data[0]);
    } else {
      alert("Something went wrong!!!");
    }
  };

  return (
    <div>
      <div className="container px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-11 mt-4">
            <div
              className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row justify-content-center g-3 m-3 mb-4">
                <div className="col-md-12 p-4">
                  <div className="d-flex justify-content-start align-items-center mt-5">
                    {!userImage?.profile_photo ? (
                      <div className="d-flex justify-content-center">
                        <div
                          className="card d-flex justify-content-center align-items-center"
                          style={{ width: "150px", height: "150px" }}
                        >
                          {Icons.person}
                        </div>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-center">
                        <img
                          src={`data:image/jpg;base64,${userImage?.profile_photo}`}
                          className="img-thumbnail"
                          alt=""
                          height={150}
                          width={150}
                        />
                      </div>
                    )}
                    <div className="ms-3">
                      <h3 className="menu-title fs-1 fw-bold">
                        {userData?.firstName + " " + userData?.lastName}
                      </h3>
                      <div className="menu-text fs-5 fw-0 mb-3">
                        {userData?.email}
                      </div>
                    </div>
                  </div>

                  <hr />

                  <h3 className="menu-title fs-3 mt-5 fw-bold">
                    Personal Details
                  </h3>

                  <ul className="list-group ">
                    <li className="list-group-item">
                      {Icons.call} {userData?.contact}
                      <span className="float-end text-secondary">Contact</span>
                    </li>
                    <li className="list-group-item">
                      {Icons.pan} {userData?.pan}
                      <span className="float-end text-secondary">PAN</span>
                    </li>
                    <li className="list-group-item">
                      {Icons.aadhar} {userData?.aadhaar}
                      <span className="float-end text-secondary">Aadhaar</span>
                    </li>

                    {userData?.postOffice ? (
                      <>
                        <li className="list-group-item">
                          {Icons.location}
                          {userData?.postOffice}, {userData?.city},{" "}
                          {userData?.state}, {userData?.pinCode}
                          <span className="float-end text-secondary">
                            Address
                          </span>
                        </li>

                        {userData?.employment_type ? (
                          <>
                            <h3 className="menu-title fs-3 mt-5 fw-bold">
                              Employment Details
                            </h3>
                            <ul className="list-group ">
                              <li className="list-group-item">
                                {Icons.employmentType}{" "}
                                {userData?.employment_type}
                                <span className="float-end text-secondary">
                                  Employment Type
                                </span>
                              </li>
                              {userData?.company_name != "N/A" &&
                              userData?.company_name ? (
                                <li className="list-group-item">
                                  {Icons.workPlace} {userData?.company_name}
                                  <span className="float-end text-secondary">
                                    Company Name
                                  </span>
                                </li>
                              ) : null}
                              <li className="list-group-item">
                                {Icons.email} {userData?.professional_email}
                                <span className="float-end text-secondary">
                                  Professional Email
                                </span>
                              </li>
                              {userData?.business_nature != "N/A" &&
                              userData?.business_nature ? (
                                <li className="list-group-item">
                                  {Icons.bussiness} {userData?.business_nature}
                                  <span className="float-end text-secondary">
                                    Nature of Bussiness
                                  </span>
                                </li>
                              ) : null}
                              <li className="list-group-item">
                                {Icons.salary} {userData?.monthly_income}
                                <span className="float-end text-secondary">
                                  Monthly Income
                                </span>
                              </li>
                            </ul>

                            {userData?.account_number ? (
                              <>
                                <h3 className="menu-title fs-3 mt-5 fw-bold">
                                  Bank Details
                                </h3>

                                <ul className="list-group ">
                                  <li className="list-group-item">
                                    {Icons.account} {userData?.account_number}
                                    <span className="float-end text-secondary">
                                      Account Number
                                    </span>
                                  </li>

                                  <li className="list-group-item">
                                    {Icons.searchWorld} {userData?.ifsc_code}
                                    <span className="float-end text-secondary">
                                      IFSC
                                    </span>
                                  </li>

                                  <li className="list-group-item">
                                    {Icons.pin} {userData?.branch_name}
                                    <span className="float-end text-secondary">
                                      Branch
                                    </span>
                                  </li>

                                  <li className="list-group-item">
                                    {Icons.bank} {userData?.bank_name}
                                    <span className="float-end text-secondary">
                                      Bank
                                    </span>
                                  </li>
                                </ul>
                                {loanStatus ? null : (
                                  <div className="row justify-content-center">
                                    <div className="col-5 mt-3">
                                      <NavLink to="/borrowing-details">
                                        <button
                                          type="submit"
                                          className="btn btn-primary w-100 py-3 btn-primary"
                                        >
                                          Apply for Loan
                                        </button>
                                      </NavLink>
                                    </div>
                                  </div>
                                )}
                              </>
                            ) : (
                              <div className="row justify-content-center">
                                <div className="col-5 mt-3">
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
                            )}
                          </>
                        ) : (
                          <div className="row d-flex justify-content-center">
                            <div className="col-5 mt-3">
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
                        )}
                      </>
                    ) : (
                      <div className="row justify-content-center">
                        <div className="col-5 mt-3">
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
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisteredDetails;
