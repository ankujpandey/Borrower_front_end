import React, { useContext, useEffect, useState } from "react";
import { Icons } from "../../icons/Icons";
import { ApiCall } from "../../functions/ApiCall";
import { UserContext } from "../../contextAPI/UserContext";
import { saveAs } from "file-saver";
import AgreementModel from "../../modals/AgreementModel";

function LoanProposal({ uid, setLoanStatus }) {
	const [loanData, setLoanData] = useState();
	const { token } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const [update, setUpdate] = useState(false);

	useEffect(() => {
		fetchData(uid);
		setUpdate(false);
	}, [update]);

	const fetchData = async (uid) => {
		const config = {
			method: "get",
			url: `http://localhost:4000/api/v1/getLoanWithEMI/${uid}`,
			headers: { "Content-Type": "application/json", authorization: token },
		};

		try {
			const response = await ApiCall(config);

			if (response.status === 201) {
				console.log(response?.data?.data);
				setLoanData(response?.data?.data);
			} else {
				alert("Something went Wrong");
			}
		} catch (error) {
			console.log("Something Went wrong");
		}
	};

	// ------------------------------------------
	//  download pdf
	// ------------------------------------------

	const handlepdfDownload = async (id) => {
		try {
			const config = {
				method: "get",
				url: `http://localhost:4000/api/v1/createAgreementPdf/${id}`,
				responseType: "blob",
			};
			let response = await ApiCall(config);
			console.log("==========response", response);
			if (response.status === 200) {
				setLoading(false);
				console.log(response.data);
				const pdfBlob = new Blob([response.data], { type: "application/pdf" });
				saveAs(pdfBlob, `user_${id}.pdf`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="dashboard-card-border">
			<div className="row m-5">
				{/* <div className="row justify-content-center align-items-center">
					<div className={`${loading ? "loader" : ""}`}></div>
				</div> */}
				<div className={`${loading ? "row-loader" : ""}`}>
					<div className="col-12">
						<h4>Loan Proposal</h4>
						<hr className="mt-2 mb-1" />

						{loanData?.loanData?.Loan_state > "1300" ? (
							<>
								<div className="col-9">
									<table className="table-without-line">
										<tbody>
											<tr>
												<th>
													<p>Invest Id: </p>
												</th>
												<td></td>
											</tr>
											<tr>
												<th>
													<p>Lender Name: </p>
												</th>
												<td>
													<p>Mr Borrower</p>
												</td>
											</tr>
											<tr>
												<th>
													<p>Amount: </p>
												</th>
												<td>
													<p>{loanData?.loanData?.amountApproved}</p>
												</td>
											</tr>
											<tr>
												<th>
													<p>ROI:</p>
												</th>
												<td>
													<p>{loanData?.loanData?.minRoiApproved}</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								{loanData?.loanData?.Loan_state === "1400" ? (
									<>
										<hr className="mt-2 mb-1" />

										<div
											className="alert alert-warning d-flex align-items-center"
											role="alert">
											{Icons.warning}
											<div>
												Please review the agreement and click on I accept below.
											</div>
										</div>
										<div className="row justify-content-center">
											<div className="col-5">
												<button
													className="btn btn-primary w-100 py-3 btn-primary"
													data-bs-toggle="modal"
													data-bs-target="#agreementModal">
													View All Agreement
												</button>
											</div>
										</div>
									</>
								) : loanData?.loanData?.Loan_state === "-1000" ? (
									<>
										<p>You have declined the Agreement.</p>
									</>
								) : loanData?.loanData?.Loan_state > "1400" ? (
									<>
										<hr className="mt-2 mb-3" />
										<div className="alert alert-success m-0" role="alert">
											{Icons.success}
											<div>You have accepted our terms of agreement.</div>
										</div>
										<div className="row justify-content-center">
											<div className="col-5 mt-3">
												<button
													className="btn btn-primary w-100 py-3 btn-primary"
													onClick={() => {
														setLoading(true);
														handlepdfDownload(uid);
													}}>
													Download Agreement
												</button>
											</div>
										</div>
									</>
								) : null}
							</>
						) : (
							<div>
								<p className="calculator-msg">
									You're Application is under process.
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
			<AgreementModel
				loanData={loanData}
				setLoanStatus={setLoanStatus}
				setUpdate={setUpdate}
			/>
		</div>
	);
}

export default LoanProposal;
