import React from "react";

import { Icons } from "../icons/Icons";

function LogModel(logData) {
  // const logData = props;
  console.log("-----------Model", logData.logData);

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
              {logData?.logData?.map((logdata) => (
                <div className="list-group-item border-1" key={logdata.Logid}>
                  <div className="media mt-0 align-items-center">
                    <div className="transcations-icon">
                      <i>{Icons.BsCalendarCheck}</i>
                    </div>
                    <div className="media-body">
                      <div className="d-flex align-items-center">
                        <div className="mt-0">
                          <h6 className="mb-1 fs-6 fw-normal text-dark">
                            <span className="fs-11 fw-semibold">
                              {logdata?.createdAt.slice(0, 10)}
                            </span>
                          </h6>
                          <p className="mb-0 fs-10 text-muted">
                            {logdata?.createdAt.slice(11, 16)}
                          </p>
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
