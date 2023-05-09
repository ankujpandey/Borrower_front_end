import React from "react";
import moment from "moment";

function AgreementModel(props) {
	const date = moment().format("DD-MMM-YYYY");
	console.log(date);
	return (
		<div
			className="modal fade"
			id="agreementModal"
			tabIndex={-1}
			aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div
				className="modal-dialog"
				style={{
					maxWidth: "60%",
				}}>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Terms and Conditions & Loan Agreement
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						/>
					</div>
					<div className="modal-body modals-card-border calculator-msg px-5 d-flex flex-column justify-content-around">
						<div className="col-12">
							<p>
								These Master Terms and Conditions of the Loan Agreement ("
								<b>MTCLA</b>") shall govern the general terms and conditions
								applicable to the Loan (defined below) to be provided to
								<b>Borrower(s)</b> by the <b>Lender(s)</b> through{" "}
								<b>MrBorrower.com</b>
							</p>
							<p>
								MrBorrower India Private Limited (CIN: U67100HR2013PTCO48670) a
								company incorporated under Companies Act, 1956 and having its
								corporate office at 5C & 5D, 5th floor, Lemon Tree, Sector 60,
								Gurgaon – Haryana 122011, (hereinafter referred to as "
								<b>MrBorrower.com</b>" or the "<b>Confirming Party</b>"),
							</p>
							<p>
								And <br />
								Lenders whose details are provided in Schedule II below
								hereinafter referred to as the "<b>Lenders</b>" which expression
								unless repugnant to the context shall mean and includes its
								legal representatives, assignee, nominee(s) and administrator;
							</p>
							<p>
								And <br />
								Borrowers whose details are provided in Schedule II below
								hereinafter referred to as the "<b>Borrower</b>" which
								expression unless repugnant to the context shall mean and
								includes its legal representatives, assignee, nominee(s) and
								administrator;
							</p>
							<p>
								<b>WHEREAS</b>: (a) the Borrower(s) have requested the Lender(s)
								for granting the Loan (hereinafter defined) to the Borrower(s)
								through Faircent Platform; (b) after considering the request of
								the Borrower(s), the Lender(s) have agreed to grant the Loan to
								the Borrower(s) through Faircent Platform, subject to the terms
								and conditions contained in the Loan Documents (hereinafter
								defined). The Borrower(s) agrees to this MTCLA digitally by
								click wrap method by clicking on the "I Accept" or "Consent"
								button/box and the same shall be construed as an express and
								explicit consent under the existing laws of India, valid,
								binding and enforceable in accordance with all applicable laws
								as if the Borrower have signed/endorsed each page of this MTCLA.
								In the event Lender(s) or Confirming Party requires the Borrower
								to endorse its physical signatures on the MTCLA, the Borrower
								undertakes to comply without any demur. The Lender(s) and
								Confirming Party shall be deemed to have executed the Agreement
								upon disbursal of the sanctioned Loan Amount to the Borrower.
								The Participants understand that the applicable stamp duty
								payable on this Loan Agreement shall be deemed to be paid as
								part of the combined stamp duty paid for multiple loans
								agreements and the same shall be evidenced by the certificate
								number securely stored in the Confirming Party’s system.
							</p>
							<b>1. Definitions</b>
							<br />
							<br />
							<p>
								a. "<b>Borrower’s Dues</b>" means the outstanding principal
								amount of the Loan and other amounts payable by the Borrower(s)
								to the Lender(s)/ the confirming party as per the Loan
								Documents, including any interest, Default Interest, fees,
								costs, charges, expenses and other sums whatsoever payable by
								the Borrower(s) to the Lender(s) /confirming party.
							</p>
							<p>
								b. "<b>Confirming Party</b>" or "<b>MrBorrower.com</b>"– The
								term shall mean and include the registered P2P NBFC that owns
								and operates the Faircent Platform(s) and is an aggregator of
								Lender(s) and Borrower(s)
							</p>
							<p>
								c. "<b>Default Interest</b>" shall mean and include the penal
								interest to be paid by the Borrower(s) in the event of default
								in payment/ repayment of the Loan or any part thereof or upon
								occurrence of any other default/ Event of Default at the rate of
								18% p.a. on the defaulted amount in case of any payment default
								and the entire outstanding Loan amount in case of any other
								default/ Event of Default, for the period commencing from the
								date of such default until the same is cured/ rectified to the
								satisfaction of Confirming Party.
							</p>
							<p>
								d. "<b>Due Date(s)</b>" means such date(s) on which (a) any
								amount including principal, interest and/or other charges in
								respect of the Loan is due and/or payable by the Borrower(s) to
								the Lender(s) in terms of the Loan Documents; and/or (b)
								performance of any other obligation(s) required to be complied
								with by the Borrower(s) under the Loan Documents.
							</p>
							<p>
								e. "<b>EMI</b>" – The term shall mean and include Equated
								Monthly Instalments payable by the Borrower(s) to the Lender(s)
								as per the repayment schedule mentioned in the Key Fact
								Statement (KFS).
							</p>
							<p>
								f. "<b>Event of Default</b>" means any event(s) or
								circumstance(s) specified as such in this MTCLA and/or any other
								event(s) or circumstance(s) referred to/defined as an Event of
								Default under any of the Loan Documents upon happening of which
								the entire Borrower(s) Dues becomes immediately payable.
							</p>
							<p>
								g. "<b>MrBorrower Platform(s)</b>" shall mean and include all
								digital footprint, mobile application(s) and website(s) of
								MrBorrower.com and/or Confirming Party including{" "}
								<a href="#">www.MrBorrower.com</a> operated under the brand
								MrBorrower.
							</p>
							<p>
								h. "<b>Key Fact Statement</b>" or "<b>KFS</b>" shall mean and
								include a standard format document containing the details of
								Annual Percentage Rate, the recovery mechanism, details of
								grievance redressal officer designated specifically to deal with
								digital lending/ FinTech related matter and the cooling-off/
								look-up period, apart from all applicable fee and charges and
								other necessary information.
							</p>
							<p>
								i. "<b>Lending Service Provider (LSP)</b>" shall mean and
								include an agent of the Confirming Party who carries out one or
								more of their functions or part thereof in customer acquisition,
								underwriting support, pricing support, servicing, monitoring,
								recovery of specific loan or loan portfolio on behalf of
								Confirming Party in conformity with extant outsourcing
								guidelines issued by the Reserve Bank of India.
							</p>
							<p>
								j. "<b>Loan</b>" – The term shall mean and include the sum of
								the individual contributions made by all the Lenders (including
								Top-up Loan if any), disbursed into the bank account updated by
								the Borrower as per the details in the Schedule II of this
								MTCLA.
							</p>
							<p>
								k. "<b>Loan Documents</b>" means (i) this MTCLA/Agreement, (ii)
								the Sanction Letter, and/or (iii) the Key Fact Statement (KFS),
								and/or (iv) the Terms Of Use agreed at the time of registration
								on MrBorrower Platform by the Participant(s).
							</p>
							<p>
								l. "<b>Material Adverse Effect</b>" means a material adverse
								effect, in the opinion of the Confirming Party, on or affecting
								(a) the business, operations, property or condition (financial
								or otherwise) of the Borrower(s); or (b) the ability of the
								Borrower(s) to perform its/their obligations under the Loan
								Documents; or (c) the validity or enforceability of the Loan
								Documents or the rights or remedies of the Lender(s) and/or
								Confirming Party under the Loan Documents.
							</p>
							<p>
								m. "<b>Parties</b>" – The term shall mean and include the
								Lender(s), the Borrower(s) and the Confirming Party consenting
								to the terms of this MTCLA.
							</p>
							<p>
								n. "<b>Participant(s)</b>" – The term shall mean and include
								both the sections of the users i.e. the Lender(s) and the
								Borrower(s) registered with Confirming Party through Faircent
								Platform(s).
							</p>
							<p>
								o. "<b>Sanction Letter</b>" shall mean the sanction letter
								issued by the Confirming Party containing the relevant
								commercial and operational terms and conditions applicable to
								the Loan.
							</p>
							<b>Schedule I:</b>
							<br />
							<br />
							<p>
								<b>
									This schedule is governed by the terms of the MTCLA executed
									on at {date} Gurugram, Haryana.
								</b>
							</p>
							<p>
								<b>PART A: Borrower Amortization Schedule</b>
							</p>
							<p>
								<b>EMI Calculator</b>
							</p>
						</div>
						<div>
							<table className="table table-bordered">
								<tbody>
									<tr>
										<td>Loan Amount</td>
										<td>200000</td>
									</tr>
									<tr>
										<td>Loan Term (Months)</td>
										<td>36</td>
									</tr>
									<tr>
										<td>Payments Per Year</td>
										<td>12</td>
									</tr>
									<tr>
										<td>Rate of Interest</td>
										<td>24.00%</td>
									</tr>
									<tr>
										<td>Collection Fee (On Outstanding Principal)</td>
										<td>12.00%</td>
									</tr>
									<tr>
										<td>Moratorium Period EMI</td>
										<td>0</td>
									</tr>
									<tr>
										<td>Regular EMI</td>
										<td>12</td>
									</tr>
									<tr>
										<td>EMI due date</td>
										<td>10th</td>
									</tr>
									<tr>
										<td>Additional Charges</td>
										<td>18% pa</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div>
							<p>CALCULATION OF DETAILS OF EMI</p>
							<table className="table table-bordered">
								<thead>
									<tr>
										<th scope="col">MONTHS</th>
										<th scope="col">MONTHS Installment</th>
										<th scope="col">Interest Amount Payable to</th>
										<th scope="col">Principal</th>
										<th scope="col">Balance</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>0</td>
										<td></td>
										<td></td>
										<td></td>
										<td>200000</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div>
							<p>
								<b>Schedule II:</b>
							</p>
							<p>
								This schedule is governed by the terms of the MTCLA executed on{" "}
								<b>{date}</b> at Gurgaon, Haryana
							</p>
							<p>
								<u>
									<b>Borrower's Details:</b>
								</u>
							</p>
							<p>Name : MrBrrower </p>
							<p>
								Address:5C & 5D, 5th floor, Lemon Tree, Sector 60, Gurgaon –
								Haryana 122011
							</p>
							<p>Purpose of Loan availed by the borrower: Business Funding</p>
							<p>
								PAN:<b> BICPB9784R</b>
							</p>
						</div>
					</div>
					{/* <div className="modal-footer"> */}
					<hr className="mt-0 mb-0" />
					<div className="row justify-content-center align-items-center my-2 mx-3">
						<div className="col-8">
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="exampleCheck1"
								/>
								<label className="form-check-label" for="exampleCheck1">
									<p className="calculator-msg">
										I have read the loan agreement including the loan key fact
										statement and I consent to the same.
									</p>
								</label>
							</div>
						</div>

						<div className="col-2">
							<button
								className="btn btn-outline-primary rounded-pill px-4"
								data-bs-dismiss="modal">
								Reject
							</button>
						</div>
						<div className="col-2">
							<button className="btn btn-primary rounded-pill px-4">
								Accept
							</button>
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>
		</div>
	);
}

export default AgreementModel;
