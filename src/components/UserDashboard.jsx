import React, { useState } from "react";
import RegisteredDetails from "./RegisteredDetails";
import LoanOverview from "./LoanOverview";
import UserProfile from "./UserProfile";
import LoanProposal from "./LoanProposal";

function UserDashboard({ uid }) {
	console.log(uid);
	const [profilePage, setProfilePage] = useState(true);
	const [loanStatus, setLoanStatus] = useState(false);
	const [loanOverview, setLoanOverview] = useState(false);
	const [emiPage, setEmiPage] = useState(false);
	const [passBookPage, setPassBookPage] = useState(false);
	const [loanDetailsPage, setLoanDetailsPage] = useState(false);

	console.log("UserDashboard Called");

	// useEffect(() => {}, [profilePage]);

	return (
		<div className="container px-lg-9 scrollspy-example bg-body-tertiary p-3 rounded-2">
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
											setLoanOverview(false);
											setLoanStatus(false);
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
										className={`nav-link ${loanOverview ? "active" : ""}`}
										onClick={() => {
											setProfilePage(false);
											setEmiPage(false);
											setLoanStatus(false);
											setPassBookPage(false);
											setLoanDetailsPage(false);
											setLoanOverview(true);
										}}
										href="#">
										<span className={`${loanOverview ? "enable" : ""}`}>
											Loan Overview
										</span>
									</a>
									<a
										className={`nav-link ${loanStatus ? "active" : ""}`}
										onClick={() => {
											setProfilePage(false);
											setLoanOverview(false);
											setEmiPage(false);
											setPassBookPage(false);
											setLoanDetailsPage(false);
											setLoanStatus(true);
										}}>
										<span className={`${loanStatus ? "enable" : ""}`}>
											Loan Proposal
										</span>
									</a>
									<a
										className={`nav-link ${emiPage ? "active" : ""}`}
										onClick={() => {
											setProfilePage(false);
											setLoanOverview(false);
											setLoanStatus(false);
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
											setLoanOverview(false);
											setLoanStatus(false);
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
											setLoanOverview(false);
											setLoanStatus(false);
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

							{loanOverview ? (
								<div className="col-10">
									<LoanOverview uid={uid} />
								</div>
							) : null}

							{loanStatus ? (
								<div className="col-10">
									<LoanProposal uid={uid} />
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserDashboard;
