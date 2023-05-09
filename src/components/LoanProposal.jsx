import React from "react";
import { Icons } from "../icons/Icons";
import AgreementModel from "../modals/AgreementModel";

function LoanProposal(props) {
	return (
		<div className="container dashboard-card-border px-lg-5">
			<div className="row m-5">
				<div className="col-12">
					<h4>Loan Proposal</h4>
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
										<p>Invest Id: </p>
									</th>
									<td></td>
								</tr>
								<tr>
									<th>
										<p>Lender Name: </p>
									</th>
									<td></td>
								</tr>
								<tr>
									<th>
										<p>Amount: </p>
									</th>
									<td></td>
								</tr>
								<tr>
									<th>
										<p>ROI: </p>
									</th>
									<td></td>
								</tr>
								{/* <tr>
									<th>
										<p>Invest Id: </p>
									</th>
									<td></td>
								</tr> */}
							</tbody>
						</table>
					</div>
					<hr className="mt-2 mb-1" />

					<div
						class="alert alert-warning d-flex align-items-center"
						role="alert">
						{Icons.warning}
						<div>Please review the agreement and click on I accept below.</div>
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
				</div>
			</div>
			<AgreementModel />
		</div>
	);
}

export default LoanProposal;
