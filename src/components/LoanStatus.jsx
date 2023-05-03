import React, { useEffect, useState } from "react";
import RegisteredDetails from "./RegisteredDetails";

function LoanStatus({ loanStatus }) {
  console.log(loanStatus);
  const [profilePage, setProfilePage] = useState(true);
  const [statusPage, setStatusPage] = useState(false);
  const [emiPage, setEmiPage] = useState(false);
  const [passBookPage, setPassBookPage] = useState(false);

  // useEffect(() => {}, [profilePage]);

  return (
    <div className="container px-lg-7">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div
            className="card shadow mb-5 bg-body-tertiary rounded wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="d-flex">
              <div className="col-2 round-nav ps-3 pt-4 pb-4 ">
                <nav className="nav flex-column">
                  <a
                    className={`nav-link ${profilePage ? "active" : ""}`}
                    aria-current="page"
                    onClick={() => {
                      setProfilePage(true);
                      setStatusPage(false);
                      setEmiPage(false);
                      setPassBookPage(false);
                    }}
                    href="#"
                  >
                    <span className={`${profilePage ? "enable" : ""}`}>
                      Profile
                    </span>
                  </a>
                  <a
                    className={`nav-link ${statusPage ? "active" : ""}`}
                    onClick={() => {
                      setProfilePage(false);
                      setStatusPage(true);
                      setEmiPage(false);
                      setPassBookPage(false);
                    }}
                    href="#"
                  >
                    <span className={`${statusPage ? "enable" : ""}`}>
                      Loan Status
                    </span>
                  </a>
                  <a
                    className={`nav-link ${emiPage ? "active" : ""}`}
                    onClick={() => {
                      setProfilePage(false);
                      setStatusPage(false);
                      setEmiPage(true);
                      setPassBookPage(false);
                    }}
                    href="#"
                  >
                    <span className={`${emiPage ? "enable" : ""}`}>
                      EMI Details
                    </span>
                  </a>
                  <a
                    className={`nav-link ${passBookPage ? "active" : ""}`}
                    onClick={() => {
                      setProfilePage(false);
                      setStatusPage(false);
                      setEmiPage(false);
                      setPassBookPage(true);
                    }}
                  >
                    <span className={`${passBookPage ? "enable" : ""}`}>
                      Passbook
                    </span>
                  </a>
                </nav>
              </div>
              {profilePage ? (
                <div className="col-10">
                  <RegisteredDetails loanStatus={loanStatus} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanStatus;