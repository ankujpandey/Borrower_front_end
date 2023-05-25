import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contextAPI/UserContext";
import { ApiCall } from "../../functions/ApiCall";
import { Icons } from "../../icons/Icons";

function UserProfile(props) {
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
      console.log(response?.data?.data[0]);
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
      await setUserImage(response?.data?.data[0]);
    } else {
      alert("Something went wrong!!!");
    }
  };

  return (
    <div className="container dashboard-card-border px-lg-5">
      <div className="row m-5">
        <div className="col-12">
          <h4>Personal Details</h4>
          <hr className="mt-2 mb-1" />
          <div className="row justify-content-center">
            <div className="col-9 mt-3">
              <table className="table-without-line">
                <tbody>
                  <tr>
                    <th>
                      <p>Name:</p>
                    </th>
                    <td>
                      <p>{userData?.firstName + " " + userData?.lastName}</p>{" "}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>E-mail:</p>
                    </th>
                    <td>
                      <p> {userData?.email}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>Contact:</p>
                    </th>
                    <td>
                      <p> {userData?.contact}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>PAN:</p>
                    </th>
                    <td>
                      <p> {userData?.pan}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>Aadhaar:</p>
                    </th>
                    <td>
                      <p> {userData?.aadhaar}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p>Address:</p>
                    </th>
                    <td>
                      <p>
                        {userData?.postOffice}, {userData?.city},
                        {userData?.state}, {userData?.pinCode}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-3 justify-content-end mt-2">
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
            </div>
          </div>
          <h4>Employment Details</h4>
          <hr className="mt-2 mb-1" />
          <div className="col-10 mt-3">
            <table className="table-without-line">
              <tbody>
                <tr>
                  <th>
                    <p>Employment Type:</p>
                  </th>
                  <td>
                    <p>{userData?.employment_type}</p>
                  </td>
                </tr>
                {userData?.company_name !== "N/A" && userData?.company_name ? (
                  <tr>
                    <th>
                      <p>Company Name:</p>
                    </th>
                    <td>
                      <p> {userData?.company_name}</p>
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <th>
                    <p>Professional Email:</p>
                  </th>
                  <td>
                    <p> {userData?.professional_email}</p>
                  </td>
                </tr>
                {userData?.business_nature !== "N/A" &&
                userData?.business_nature ? (
                  <tr>
                    <th>
                      <p>Nature of Bussiness:</p>
                    </th>
                    <td>
                      <p> {userData?.business_nature}</p>
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <th>
                    <p>Monthly Income:</p>
                  </th>
                  <td>
                    <p> {userData?.monthly_income}</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p>Address:</p>
                  </th>
                  <td>
                    <p>
                      {" "}
                      {userData?.postOffice}, {userData?.city},{userData?.state}
                      , {userData?.pinCode}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4>Bank Details</h4>
          <hr className="mt-2 mb-1" />
          <div className="col-5 mt-3">
            <table className="table-without-line">
              <tbody>
                <tr>
                  <th>
                    <p>Account Number:</p>
                  </th>
                  <td>
                    <p>{userData?.account_number}</p>
                  </td>
                </tr>

                <tr>
                  <th>
                    <p>IFSC Code:</p>
                  </th>
                  <td>
                    <p> {userData?.ifsc_code}</p>
                  </td>
                </tr>

                <tr>
                  <th>
                    <p>Branch:</p>
                  </th>
                  <td>
                    <p> {userData?.branch_name}</p>
                  </td>
                </tr>

                <tr>
                  <th>
                    <p>Bank Name:</p>
                  </th>
                  <td>
                    <p> {userData?.bank_name}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
