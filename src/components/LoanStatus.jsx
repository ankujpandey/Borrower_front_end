import React from "react";

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
								</tr>
								<tr>
									<th>
										<p>Duration: </p>
									</th>
								</tr>
								<tr>
									<th>
										<p>Rate of Interest Expected: </p>
									</th>
								</tr>
							</tbody>
						</table>

						<p>Amount Approved: </p>
						<p>Duration Approved: </p>
						<p>Minimum interest rate Approved: </p>
						<p>Maximum interest rate Approved: </p>
						<p>Amount Funded: </p>
						<p>Remaining Amount: </p>
						<p>Amount Disbursed: </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoanStatus;
