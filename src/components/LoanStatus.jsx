import React from "react";
import { Icons } from "../icons/Icons";

function LoanStatus(props) {
	console.log("Loan Status------>>>>", props);
	return (
		<div className="container px-lg-5">
			<div className="row m-5">
				<div className="col-12">
					<h4>Loan Status</h4>
					<hr className="mt-2 mb-1" />
					<div>
						<p className="calculator-msg">
							You're Application is under process.
						</p>

						<table className="table-without-line">
							<tbody>
								<tr>
									<th>
										<p>Amount Requested: </p>
									</th>
									<td>4000</td>
								</tr>
								<tr>
									<th>
										<p>Duration: </p>
									</th>
									<td>4000</td>
								</tr>
								<tr>
									<th>
										<p>Rate of Interest Expected: </p>
									</th>
									<td>4000</td>
								</tr>
								<tr>
									<th>
										<p>Amount Approved: </p>
									</th>
									<td>4000</td>
								</tr>
								<tr>
									<th>
										<p>Duration Approved: </p>
									</th>
									<td>4000000000</td>
								</tr>
								<tr>
									<th>
										<p>Minimum interest rate Approved: </p>
									</th>
								</tr>
								<tr>
									<th>
										<p>Maximum interest rate Approved: </p>
									</th>
								</tr>
								<tr>
									<th>
										<p>Amount Funded: </p>
									</th>
								</tr>
								<tr>
									<th>
										<p>Remaining Amount: </p>
									</th>
								</tr>
								<tr>
									<th>
										<p>Amount Disbursed: </p>
									</th>
								</tr>
							</tbody>
						</table>
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

export default LoanStatus;
