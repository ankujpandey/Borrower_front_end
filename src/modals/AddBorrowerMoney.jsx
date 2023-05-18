import React from "react";

function AddBorrowerMoney(props) {
	return (
		<div className="modal fade" id="addBorrowerMoney" tabIndex={-1}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-body">
						<div className="modal-border-deign m-3">
							<div className="row justify-content-center g-3 m-3">
								<div className="modal-heading">Add Money</div>

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
											name="amountAsked"
											id="amountAsked"
											placeholder="amount"
											// value={values.amountAsked}
											// onChange={handleChange}
											// onBlur={handleBlur}
										/>
										<label htmlFor="amountAsked">Amount</label>
										{/* {errors.amountAsked && touched.amountAsked ? (
										<div className="form-error form-validation-warning text-danger">
											{errors.amountAsked}
										</div>
									) : null} */}
									</div>
								</div>
								<div className="col-4 ">
									<button
										type="submit"
										className="btn btn-primary w-100 py-2 btn-primary">
										Add Money
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddBorrowerMoney;
