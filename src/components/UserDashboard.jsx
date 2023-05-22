import React, { useState } from "react";
import RegisteredDetails from "./RegisteredDetails";
import LoanOverview from "./LoanOverview";
import UserProfile from "./UserProfile";
import LoanProposal from "./LoanProposal";
import EmiDetails from "./EmiDetails";
import PassBook from "./PassBook";
import Wallet from "./Wallet";

function UserDashboard({ uid, loanStatus, setLoanStatus }) {
	console.log(uid);
	const [profilePage, setProfilePage] = useState(true);
	const [loanProposal, setloanProposal] = useState(false);
	const [loanOverview, setLoanOverview] = useState(false);
	const [emiPage, setEmiPage] = useState(false);
	const [passBookPage, setPassBookPage] = useState(false);
	const [walletPage, setWalletPage] = useState(false);

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
								<li className="nav nav-btns animation flex-column">
									<a
										className={`nav-link ${profilePage ? "active" : ""}`}
										aria-current="page"
										onClick={() => {
											setProfilePage(true);
											setLoanOverview(false);
											setloanProposal(false);
											setEmiPage(false);
											setPassBookPage(false);
											setWalletPage(false);
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
											setloanProposal(false);
											setPassBookPage(false);
											setWalletPage(false);
											setLoanOverview(true);
										}}
										href="#">
										<span className={`${loanOverview ? "enable" : ""}`}>
											Loan Overview
										</span>
									</a>
									<a
										className={`nav-link ${loanProposal ? "active" : ""}`}
										onClick={() => {
											setProfilePage(false);
											setLoanOverview(false);
											setEmiPage(false);
											setPassBookPage(false);
											setWalletPage(false);
											setloanProposal(true);
										}}>
										<span className={`${loanProposal ? "enable" : ""}`}>
											Loan Proposal
										</span>
									</a>
									<a
										className={`nav-link ${emiPage ? "active" : ""}`}
										onClick={() => {
											setProfilePage(false);
											setLoanOverview(false);
											setloanProposal(false);
											setPassBookPage(false);
											setWalletPage(false);
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
											setloanProposal(false);
											setEmiPage(false);
											setWalletPage(false);
											setPassBookPage(true);
										}}>
										<span className={`${passBookPage ? "enable" : ""}`}>
											Passbook
										</span>
									</a>
									<a
										className={`nav-link ${walletPage ? "active" : ""}`}
										onClick={() => {
											setProfilePage(false);
											setLoanOverview(false);
											setloanProposal(false);
											setEmiPage(false);
											setPassBookPage(false);
											setWalletPage(true);
										}}>
										<span className={`${walletPage ? "enable" : ""}`}>
											Wallet
										</span>
									</a>
								</li>
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

							{loanProposal ? (
								<div className="col-10">
									<LoanProposal uid={uid} setLoanStatus={setLoanStatus} />
								</div>
							) : null}

							{emiPage ? (
								<div className="col-10">
									<EmiDetails uid={uid} loanStatus={loanStatus} />
								</div>
							) : null}

							{passBookPage ? (
								<div className="col-10">
									<PassBook uid={uid} loanStatus={loanStatus} />
								</div>
							) : null}

							{walletPage ? (
								<div className="col-10">
									<Wallet uid={uid} loanStatus={loanStatus} />
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
