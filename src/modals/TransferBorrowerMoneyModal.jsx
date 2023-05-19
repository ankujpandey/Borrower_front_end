import React from "react";

function TransferBorrowerMoneyModal(props) {
	return (
		<div className="modal fade" id="transferMoney" tabIndex={-1}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-body">
						<div className="modal-border-deign m-3">
							<div className="row justify-content-center g-3 m-3">
								<div
									className="modal-heading"
									style={{ marginRight: "5.2rem", width: "311px" }}>
									Transfer money from Wallet
								</div>

								<div className="col-12">
									<div className="form-floating mt-3">
										<input
											type="text"
											className="form-control"
											// className={`form-control ${
											// 	errors.amountAsked && touched.amountAsked
											// 		? "is-invalid"
											// 		: touched.amountAsked
											// 		? "is-valid"
											// 		: ""
											// }`}
											name="Amount"
											id="Amount"
											placeholder="amount"
											// value={values.amountAsked}
											// onChange={handleChange}
											// onBlur={handleBlur}
										/>
										<label htmlFor="Amount">Amount</label>
										{/* {errors.amountAsked && touched.amountAsked ? (
										<div className="form-error form-validation-warning text-danger">
											{errors.amountAsked}
										</div>
									) : null} */}
									</div>
								</div>

								<div className="col-12">
									<div className="form-floating">
										<input
											type="text"
											className="form-control"
											// className={`form-control ${
											// 	errors.amountAsked && touched.amountAsked
											// 		? "is-invalid"
											// 		: touched.amountAsked
											// 		? "is-valid"
											// 		: ""
											// }`}
											name="accountNumber"
											id="accountNumber"
											placeholder="amount"
											// value={values.amountAsked}
											// onChange={handleChange}
											// onBlur={handleBlur}
										/>
										<label htmlFor="accountNumber">Account Number</label>
										{/* {errors.amountAsked && touched.amountAsked ? (
										<div className="form-error form-validation-warning text-danger">
											{errors.amountAsked}
										</div>
									) : null} */}
									</div>
								</div>

								<div className="col-12">
									<div className="form-floating">
										<input
											type="text"
											className="form-control"
											// className={`form-control ${
											// 	errors.amountAsked && touched.amountAsked
											// 		? "is-invalid"
											// 		: touched.amountAsked
											// 		? "is-valid"
											// 		: ""
											// }`}
											name="ifscCode"
											id="ifscCode"
											placeholder="amount"
											// value={values.amountAsked}
											// onChange={handleChange}
											// onBlur={handleBlur}
										/>
										<label htmlFor="ifscCode">IFSC Code</label>
										{/* {errors.amountAsked && touched.amountAsked ? (
										<div className="form-error form-validation-warning text-danger">
											{errors.amountAsked}
										</div>
									) : null} */}
									</div>
								</div>

								<div className="d-flex justify-content-end">
									<div className="col-5">
										<button
											type="submit"
											className="btn btn-primary rounded-pill w-100 py-2 btn-primary">
											Transfer
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TransferBorrowerMoneyModal;
