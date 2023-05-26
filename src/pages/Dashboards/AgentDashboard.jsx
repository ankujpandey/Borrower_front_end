import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { Icons } from "../../icons/Icons";
import { UserContext } from "../../contextAPI/UserContext";
import { ApiCall } from "../../functions/ApiCall";

function AgentDashboard(props) {
  const { user, token } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(user);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemLen, setItemLen] = useState();
  const [page, setPage] = useState(1);
  let [color, setColor] = useState("black");

  const pageCount = Math.ceil(itemLen?.length / 5);

  useEffect(() => {
    if (user) {
      fetchData();
      setLoading(false);
    }
  }, [loading, user]);

  setColor = (status) => {
    status === 1 ? (color = "green") : (color = "red");
    return color;
  };

  // ----------------------------------------------
  //  Fetch Data functionality
  // ----------------------------------------------

  const fetchData = async () => {
    setLoading(true);

    const config = {
      method: "get",
      url: `http://localhost:4000/api/v1/getUserDataAgent?page=${page}&limit=5&agentId=${user?.jobAssignees_id}`,
      headers: { "Content-Type": "application/json" },
    };
    let response = await ApiCall(config);
    // console.log(page);
    if (response.status === 201) {
      console.log(response.data.data.data);
      setUsers(response?.data?.data?.data);
      setItemLen(response?.data?.data?.length[0]);
    } else {
      alert("Something went wrong!!!");
    }
  };

  // ---------------------------------------------------
  //  update Loan Status on clicking verify loan button
  // ------------------------------------------------------

  const updateLoanStatus = async (id, state) => {
    console.log(id);
    console.log(state);
    if (state < 1300) {
      const config = {
        method: "post",
        url: `http://localhost:4000/api/v1/updateLoanStatus`,
        headers: { "Content-Type": "application/json", authorization: token },
        data: {
          uid: id,
          Loan_state: 1300,
          updatedBy: "agent",
        },
      };
      let response = await ApiCall(config);
      if (response.status === 201) {
        console.log(response);
        navigate(`/users/${id}`);
      } else {
        alert("Something went wrong!!!");
      }
    } else {
      navigate(`/users/${id}`);
    }
  };

  // -----------------------------------------------
  //  page changing
  // -----------------------------------------------

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
    // console.log("hit");
    setLoading(true);
  };

  // -----------------------------------------------
  //  Delete Button functionality
  // -----------------------------------------------
  const handleDeleteUser = async (id) => {
    const deleteConfig = {
      method: "delete",
      url: `http://localhost:4000/api/v1/user/${id}`,
      headers: { "Content-Type": "application/json", authorization: token },
    };
    let response = await ApiCall(deleteConfig);

    if (response.status === 201) {
      setLoading(true);
    } else {
      alert("Something went wrong!!!");
    }
  };

  return (
    <div>
      <div className="py-5 bg-primary hero-header mb-3">
        <div className="container py-3 px-5">
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div data-wow-delay="0.1s">
                <h1 className="text-white animated zoomIn mt-5">
                  Agent Dashboard
                </h1>
              </div>
              <hr
                className="bg-white mx-auto mt-0 mb-5"
                style={{ width: 90 }}
              />
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        {/* <h6 className="position-relative d-inline text-primary ps-4">
					Users List
				</h6> */}
        <h2 className="mt-2">Users assigned to you...</h2>
      </div>

      <div className="container mt-5">
        <hr className="mb-0 mt-4" />
        <table className="table table-striped shadow-sm p-3 mb-4 rounded">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Mobile</th>
              <th scope="col">PAN</th>
              <th scope="col">Aadhaar</th>
              <th scope="col">Assigned</th>
              <th scope="col">Status</th>
              <th scope="col">Active</th>
              <th scope="col">Deleted</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((person) => (
              <tr key={person.uid}>
                <th scope="row">{person.uid}</th>
                <td>
                  {person.firstName} {person.lastName}
                </td>
                <td>{person.email}</td>
                <td>{person.contact}</td>
                <td>{person.pan}</td>
                <td>{person.aadhaar}</td>
                <td>{person.AgentName}</td>
                <td>{person.Loan_state}</td>
                <td style={{ color: setColor(person.isActive) }}>
                  {person.isActive === 1 ? "Yes" : "No"}
                </td>
                <td style={{ color: setColor(!person.isDeleted) }}>
                  {person.isDeleted === 1 ? "Yes" : "No"}
                </td>

                <td>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => handleDeleteUser(person.uid)}
                  >
                    {Icons.delete}
                  </button>
                </td>

                <td>
                  {/* <Link to={`/users/${person.uid}`}> */}
                  <button
                    type="button"
                    className="btn fs-6 btn-primary btn-sm"
                    onClick={() => {
                      updateLoanStatus(person.uid, person.Loan_state);
                    }}
                  >
                    View
                  </button>
                  {/* </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* -------------------------------
				Pagination part
			----------------------------------- */}

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          initialPage={0}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
          disabledClassName={"disabled"}
        />
      </div>
    </div>
  );
}

export default AgentDashboard;
