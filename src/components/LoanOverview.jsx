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
					<div className="col-9">
						<table className="table-without-line">
							<tbody>
								<tr>
									<th>
										<p>Amount Requested: </p>
									</th>
									<td>{loanData?.amount}</td>
								</tr>
								<tr>
									<th>
										<p>Duration: </p>
									</th>
									<td>{loanData?.tenure} months</td>
								</tr>
								<tr>
									<th>
										<p>Rate of Interest Expected: </p>
									</th>
									<td>{loanData?.rate_of_interest} %</td>
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
									<td>None</td>
								</tr>
								<tr>
									<th>
										<p>Duration Approved: </p>
									</th>
									<td>None</td>
								</tr>
								<tr>
									<th>
										<p>Minimum interest rate Approved: </p>
									</th>
									<td>None</td>
								</tr>
								<tr>
									<th>
										<p>Maximum interest rate Approved: </p>
									</th>
									<td>None</td>
								</tr>
								<tr>
									<th>
										<p>Amount Funded: </p>
									</th>
									<td>None</td>
								</tr>
								<tr>
									<th>
										<p>Remaining Amount: </p>
									</th>
									<td>None</td>
								</tr>
								<tr>
									<th>
										<p>Amount Disbursed: </p>
									</th>
									<td>None</td>
								</tr>
								<tr>
									<th>
										<p>Request Status: </p>
									</th>
									<td>
										{loanData?.Loan_state === "1200" ? (
											<p>Your request is under review.</p>
										) : (
											<p>None</p>
										)}
									</td>
								</tr>
								<tr>
									<th>
										<p>Updated On: </p>
									</th>
									<td>
										<p>
											{moment(loanData?.createdAt)
												.utcOffset("+05:30")
												.format("DD-MMM-YYYY HH:MM:SS")}
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-12">
						<h6>Eastimated EMI</h6>
						<hr className="mt-2 mb-1" />
						<p>Eastimated EMI would be {Icons.smallRupee}0.00 for ~</p>
						<p className="calculator-msg">
							(Kindly note that this is just eastimated amount as per your
							selection, actual EMI amount presented once your application is
							approved.)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoanOverview;
