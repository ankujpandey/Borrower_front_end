import React, { useContext } from "react";
import { AmountSchema, AmountInitialValue } from "../schemas";
import { UserContext } from "../contextAPI/UserContext";
import { useHandleValidation } from "../hooks/useHandleValidation";

function AddPoolMoney({ setLoading }) {
	const { token } = useContext(UserContext);
	const url = "/pool-table";
	const api = "http://localhost:4000/api/v1/createPoolTransaction";

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useHandleValidation(AmountInitialValue, AmountSchema, url, api, token);
	values.poolId = 1;
	values.txn_type = "recharge";

	return (
		<div className="modal fade" id="addPoolMoney" tabIndex={-1}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-body">
						<div className="modal-border-deign m-3">
							<div className="row justify-content-center g-3 m-3">
								<div
									className="modal-heading"
									style={{
										marginRight: "10.2rem",
										width: "220px",
									}}>
									Add money to Pool
								</div>
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
													name="credit_Amount"
													id="credit_Amount"
													placeholder="amount"
													value={values.credit_Amount}
													onChange={handleChange}
													onBlur={handleBlur}
													className={`form-control ${
														errors.credit_Amount && touched.credit_Amount
															? "is-invalid"
															: touched.credit_Amount
															? "is-valid"
															: ""
													}`}
												/>
												<label htmlFor="amountAsked">Amount</label>
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
													type="button"
													className="btn btn-primary rounded-pill w-100 py-2 btn-primary"
													onClick={(e) => {
														setLoading(true);
														handleSubmit(e);
													}}
													data-bs-dismiss="modal">
													Add Money
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

export default AddPoolMoney;
