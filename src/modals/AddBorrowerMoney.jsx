import React, { useContext } from "react";
import { walletSchema, walletInitialValue } from "../schemas";
import { UserContext } from "../context/UserContext";
import { useHandleValidation } from "../hooks/useHandleValidation";

function AddBorrowerMoney({ wallet }) {
	const { token } = useContext(UserContext);

	const url = "/dashboard";
	const api = "http://localhost:4000/api/v1/createBorrowerTransaction";

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useHandleValidation(walletInitialValue, walletSchema, url, api, token);

	values.uid = wallet?.uid;
	values.LoanID = wallet?.LoanId;
	values.txn_type = "added money to wallet";

	return (
		<div className="modal fade" id="addBorrowerMoney" tabIndex={-1}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-body">
						<div className="modal-border-deign m-3">
							<div className="row justify-content-center g-3 m-3">
								<div className="modal-heading">Add money to Wallet</div>

								<form
									action=""
									onSubmit={handleSubmit}
									className="needs-validation"
									noValidate>
									<div className="row justify-content-center g-3 mb-2">
										<div className="col-12">
											<div className="form-floating mt-3">
												<input
													type="text"
													className={`form-control ${
														errors.credit_Amount && touched.credit_Amount
															? "is-invalid"
															: touched.credit_Amount
															? "is-valid"
															: ""
													}`}
													name="credit_Amount"
													id="credit_Amount"
													placeholder="credit_Amount"
													value={values.credit_Amount}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<label htmlFor="credit_Amount">Amount</label>
												{errors.credit_Amount && touched.credit_Amount ? (
													<div className="form-error form-validation-warning text-danger">
														{errors.credit_Amount}
													</div>
												) : null}
											</div>
										</div>
										<div className="d-flex justify-content-end">
											<div className="col-5">
												<button
													type="submit"
													className="btn btn-primary rounded-pill w-100 py-2 btn-primary">
													Deposit Money
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddBorrowerMoney;
