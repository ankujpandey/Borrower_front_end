import React, { useEffect, useState } from "react";

import { ApiCall } from "../functions/ApiCall";
import { Icons } from "../icons/Icons";

function LogModel(props) {
  const { Id } = props;
  console.log("---------------", Id);
  const [logData, setLogData] = useState([]);
  // ----------------------------------------------
  //  Fetch Data functionality
  // ----------------------------------------------
  const fetchData = async () => {
    const config = {
      method: "get",
      url: `http://localhost:4000/api/v1/getlogData/${Id}`,
      headers: { "Content-Type": "application/json" },
    };
    let response = await ApiCall(config);
    if (response.status === 201) {
      console.log("------------------------", await response?.data?.data[0]);
      setLogData(response?.data?.data[0]);
    } else {
      alert("Something went wrong!!!");
    }
  };
  console.log("Log----------", logData?.old_state);
  useEffect(async () => {
    await fetchData();
  }, []);
  return (
    <div className="modal fade" id="LogModal" tabIndex={-1}>
      <div
        className="modal-dialog"
        style={{
          maxWidth: "50%",
        }}
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Log Activity
            </h5>
          </div>
          <div className="modal-body">
            <div className="list-group py-1">
              {logData?.map((logdata) => (
                <div className="list-group-item border-1">
                  <div className="media mt-0 align-items-center">
                    <div className="transcations-icon">
                      <i>{Icons.BsCalendarCheck}</i>
                    </div>
                    <div className="media-body">
                      <div className="d-flex align-items-center">
                        <div className="mt-0">
                          <h6 className="mb-1 fs-6 fw-normal text-dark">
                            <span className="fs-11 fw-semibold">22 Mar 23</span>
                          </h6>
                          <p className="mb-0 fs-10 text-muted">15:09</p>
                        </div>
                        <div className="ml-22">
                          <h5 className="mb-1 fs-13 fw-normal text-dark">
                            <span className="fs-13 fw-normal">
                              <span className="text-blue fs-15">
                                User Activity :
                              </span>
                              {logdata?.current_state}
                            </span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogModel;
