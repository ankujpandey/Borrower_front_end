import React, { useContext, useEffect, useState } from "react";
import { Icons } from "../icons/Icons";
import { ApiCall } from "../functions/ApiCall";
import { UserContext } from "../context/UserContext";
import moment from "moment";

function LoanOverview({ uid }) {
	const [loanData, setLoanData] = useState();
	const { token } = useContext(UserContext);

	useEffect(() => {
		fetchData(uid);
	}, []);

	const fetchData = async (uid) => {
		const config = {
			method: "get",
			url: `http://localhost:4000/api/v1/getLoan/${uid}`,
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

	return (
		<div className="dashboard-card-border">
			<div className="row m-5">
				<div className="col-12">
					<h4>Loan Overview</h4>
					<hr className="mt-2 mb-1" />
					<div>
						<p className="calculator-msg">
							You're Application is under process.
						</p>
					</div>
					<div className="col-10">
						<table className="table-without-line">
							<tbody>
								<tr>
									<th>
										<p>Amount Requested: </p>
									</th>
									<td>
										<p>{loanData?.amountAsked}</p>
									</td>
								</tr>
								<tr>
									<th>
										<p>Tenure: </p>
									</th>
									<td>
										<p>{loanData?.tenureAsked} months</p>
									</td>
								</tr>
								<tr>
									<th>
										<p>Rate of Interest Expected: </p>
									</th>
									<td>
										<p>{loanData?.roiAsked} %</p>
									</td>
								</tr>
								<tr>
									<th>
										<p>Applied On: </p>
									</th>
									<td>
										<p>
											{moment(loanData?.createdAt)
												.utcOffset("+05:30")
												.format("DD-MMM-YYYY HH:MM:SS")}
										</p>
									</td>
								</tr>
								<tr>
									<th>
										<p>Amount Approved: </p>
									</th>
									<td>
										{loanData?.amountApproved === null ? (
											<p>Pending</p>
										) : (
											<p>{loanData?.amountApproved}</p>
										)}
									</td>
								</tr>
								<tr>
									<th>
										<p>Tenure Approved: </p>
									</th>
									<td>
										{loanData?.tenureApproved === null ? (
											<p>Pending</p>
										) : (
											<p>{loanData?.tenureApproved}</p>
										)}
									</td>
								</tr>
								<tr>
									<th>
										<p>Minimum interest rate Approved: </p>
									</th>
									<td>
										{loanData?.minRoiApproved === null ? (
											<p>Pending</p>
										) : (
											<p>{loanData?.minRoiApproved}</p>
										)}
									</td>
								</tr>
								{/* <tr>
									<th>
										<p>Maximum interest rate Approved: </p>
									</th>
									<td>None</td>
								</tr> */}
								{/* <tr>
									<th>
										<p>Amount Funded: </p>
									</th>
									<td>{loanData?.minRoiApproved === null ? (
											<p>Pending</p>
										) : (
											<p>{loanData?.minRoiApproved}</p>
										)}</td>
								</tr> */}
								{/* <tr>
									<th>
										<p>Remaining Amount: </p>
									</th>
									<td>None</td>
								</tr> */}
								<tr>
									<th>
										<p>Amount Disbursed: </p>
									</th>
									<td>
										{loanData?.Loan_state === "1600" ? (
											<p>Yes</p>
										) : loanData?.Loan_state === "-1000" ? (
											<p>No</p>
										) : (
											<p>Pending</p>
										)}
									</td>
								</tr>
								<tr>
									<th>
										<p>Request Status: </p>
									</th>
									<td>
										{loanData?.Loan_state === "1200" ? (
											// <p>
											// 	Your Application is sent to one our agent Please wait
											// 	for his response.
											// </p>
											<p>In Process</p>
										) : loanData?.Loan_state === "1300" ? (
											<p>Your Application is under review by our agent</p>
										) : loanData?.Loan_state === "1400" ? (
											<p>Loan Approved by Agent Please check loan Proposal</p>
										) : loanData?.Loan_state === "1500" ? (
											<p>Your loan is passed.</p>
										) : loanData?.Loan_state === "-1000" ? (
											<p>We are sorry to inform you, Your loan isn't passed.</p>
										) : null}
									</td>
								</tr>
								<tr>
									<th>
										<p>Status Updated On: </p>
									</th>
									<td>
										<p>
											{moment(loanData?.updatedAt)
												.utcOffset("+05:30")
												.format("DD-MMM-YYYY HH:MM:SS")}
										</p>
									</td>
								</tr>
							</tbody>
						</table>

						{loanData?.Loan_state < 1400 ? (
							<>
								<hr className="mt-2 mb-1" />
								<p className="calculator-msg">
									(Kindly note that this is just eastimated amount as per your
									selection, actual amount presented once your application is
									approved.)
								</p>
							</>
						) : null}
					</div>
					{/* <div className="col-12">
						<h6>Eastimated EMI</h6>
						<hr className="mt-2 mb-1" />
						<p>Eastimated EMI would be {Icons.smallRupee}0.00 for ~</p>
						<p className="calculator-msg">
							(Kindly note that this is just eastimated amount as per your
							selection, actual EMI amount presented once your application is
							approved.)
						</p>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default LoanOverview;
