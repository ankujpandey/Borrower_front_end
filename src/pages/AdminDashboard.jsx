import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ApiCall } from "../functions/ApiCall";
import { NavLink } from "react-router-dom";

function AdminDashboard(props) {
  const [users, setUsers] = useState([]);

  const config = {
    method: "get",
    url: "http://localhost:4000/api/v1/getUserData",
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await ApiCall(config);
    if (response.status === 201) {
      console.log(response.data.data);
      setUsers(response?.data?.data);
    } else {
      alert("Something went wrong!!!");
    }
  };

  return (
    <div>
      <div className="py-5 mb-3">
        <div className="container py-3 px-5">
          <div className="row mt-5">
            <div className="col-12 ">
              <table className="table my-5">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Active</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>

                <tbody>
                  {users?.map((user) => (
                    <tr key={user.uid}>
                      <td>{user.uid}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.isActive == 1 ? "Yes" : "No"}</td>
                      <td scope="row">
                        <NavLink to={`/users/${user.uid}`}>
                          <button className="btn btn-success">
                            {/* <BiEditAlt /> */}
                            View
                          </button>
                        </NavLink>
                      </td>
                      <td scope="row">
                        <button
                          className="btn btn-danger"
                          // onClick={() => handleDeleteClient(client.ID)}
                        >
                          {/* <AiOutlineDelete /> */}
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
