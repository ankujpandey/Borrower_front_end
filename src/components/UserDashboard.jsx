import React, { useEffect, useState } from "react";
import RegisteredDetails from "./RegisteredDetails";
import LoanStatus from "./LoanStatus";
import UserProfile from "./UserProfile";

function UserDashboard({ loanStatus }) {
	console.log(loanStatus);
	const [profilePage, setProfilePage] = useState(true);
	const [statusPage, setStatusPage] = useState(false);
	const [emiPage, setEmiPage] = useState(false);
	const [passBookPage, setPassBookPage] = useState(false);
	const [loanDetailsPage, setLoanDetailsPage] = useState(false);

	// useEffect(() => {}, [profilePage]);

	return (
		<div
			className="container px-lg-9 scrollspy-example bg-body-tertiary p-3 rounded-2"
			data-bs-spy="scroll"
			data-bs-target="#navbar-example2"
			data-bs-root-margin="0px 0px -40%"
			data-bs-smooth-scroll="true"
			tabindex="0">
			<div className="row justify-content-center">
				<div className="col-lg-12">
					<div
						className="card shadow mb-5 bg-body-tertiary rounded wow fadeInUp"
						data-wow-delay="0.3s">
						<div className="d-flex">
							<div className="col-2 round-nav ps-3 pt-4 pb-4 ">
								<nav className="nav nav-btns flex-column">
									<a
										className={`nav-link ${profilePage ? "active" : ""}`}
										aria-current="page"
										onClick={() => {
											setProfilePage(true);
											setStatusPage(false);
											setEmiPage(false);
											setPassBookPage(false);
											setLoanDetailsPage(false);
										}}
										href="#">
										<span className={`${profilePage ? "enable" : ""}`}>
											Profile
										</span>
									</a>
									<a
										className={`nav-link ${statusPage ? "active" : ""}`}
										onClick={() => {
											setProfilePage(false);
											setEmiPage(false);
											setPassBookPage(false);
											setLoanDetailsPage(false);
											setStatusPage(true);
										}}
										href="#">
										<span className={`${statusPage ? "enable" : ""}`}>
											Loan Status
										</span>
									</a>
									<a
										className={`nav-link ${emiPage ? "active" : ""}`}
										onClick={() => {
											setProfilePage(false);
											setStatusPage(false);
											setPassBookPage(false);
											setLoanDetailsPage(false);
											setEmiPage(true);
										}}
										href="#">
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
											setLoanDetailsPage(false);
											setPassBookPage(true);
										}}>
										<span className={`${passBookPage ? "enable" : ""}`}>
											Passbook
										</span>
									</a>
									<a
										className={`nav-link ${loanDetailsPage ? "active" : ""}`}
										onClick={() => {
											setProfilePage(false);
											setStatusPage(false);
											setEmiPage(false);
											setPassBookPage(false);
											setLoanDetailsPage(true);
										}}>
										<span className={`${loanDetailsPage ? "enable" : ""}`}>
											Loan Details
										</span>
									</a>
								</nav>
							</div>
							{profilePage ? (
								<div className="col-10">
									<UserProfile />
								</div>
							) : null}

							{statusPage ? (
								<div className="col-10">
									<LoanStatus loanStatus={loanStatus} />
								</div>
							) : null}

							{/* {profilePage ? (
								<div className="col-10">
									<UserProfile loanStatus={loanStatus} />
								</div>
							) : null} */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserDashboard;
