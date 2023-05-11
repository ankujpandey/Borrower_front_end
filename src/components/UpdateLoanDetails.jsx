import React, { useContext, useState } from "react";
import { Icons } from "../icons/Icons";
import { ApiCall } from "../functions/ApiCall";
import { UserContext } from "../context/UserContext";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { verifyLoan, verifyLoanInitialValues } from "../schemas";

function UpdateLoanDetails({ user, setUpdateLoanDetail, setColor }) {
	const { token } = useContext(UserContext);
	const [loanData, setLoanData] = useState();
	// -------------------------------------------
	//  Fetch User's all data
	// -------------------------------------------

	console.log(user);

	// const onSubmit = async () => {
	// 	const config = {
	// 		method: "patch",
	// 		url: "http://localhost:4000/api/v1/updateLoanStatus",
	// 		headers: { "Content-Type": "application/json", authorization: token },
	// 	};
	// 	let response = await ApiCall(config);
	// 	if (response.status === 201) {
	// 		console.log("user data--->", response.data.data);
	// 		setLoanData(response?.data?.data);
	// 	} else {
	// 		//   setIsData(false);
	// 		alert("Something went wrong!!!");
	// 	}
	// };

	const url = "/agent-dashboard";
	const api = "http://localhost:4000/api/v1/updateLoanStatus";

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useHandleValidation(verifyLoanInitialValues, verifyLoan, url, api, token);

	values.uid = user?.uid;

	return (
		<>
			<div
				className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
				data-wow-delay="0.1s">
				<h6 className="position-relative d-inline text-primary ps-4">
					Update User Details
				</h6>
				<h2 className="mt-2">User's Details Can be changed here</h2>
			</div>

			<div className="container px-lg-5">
				<div className="row justify-content-center">
					<div className="col-lg-11 mt-4">
						<div
							className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="row">
								<div className="col-md-12 p-4">
									<button
										className="btn btn-light float-end col-2 "
										onClick={() => {
											setUpdateLoanDetail(false);
										}}>
										Back
									</button>

									<div className="d-flex justify-content-start align-items-center mt-5">
										<div className="ms-3">
											<h3 className="menu-title fs-1 fw-bold">
												{user.firstName + " " + user.lastName}
											</h3>
											<div className="menu-text fs-5 fw-0 mb-2">
												{user.email}
											</div>
											<h6 className="menu-text fs-6 mb-1 fw-bold">
												Active Status
											</h6>
											<div
												className="menu-text fs-6 mt-0"
												style={{
													color: setColor(user.isActive),
												}}>
												{user.isActive == 1 ? "Yes" : "No"}
											</div>
										</div>
									</div>

									<hr className="mb-3" />

									<form
										action=""
										onSubmit={handleSubmit}
										className="needs-validation"
										noValidate>
										<div className="row justify-content-center g-3 m-2 mb-4">
											{/* -------------------------------------------------
													Borrower's requirement Section
											-----------------------------------------------------*/}

											<h3 className="menu-title fs-3 mt-4 fw-bold">
												Applied Loan
											</h3>

											<div className="col-md-12">
												<div className="form-floating">
													<input
														type="text"
														className={"form-control"}
														name="amount"
														id="amount"
														placeholder="Amount Requested"
														value={`${user.amountAsked}`}
														disabled
													/>
													<label htmlFor="amount">Amount Requested</label>
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-floating">
													<input
														className={"form-control"}
														name="rate_of_interest"
														id="rate_of_interest"
														placeholder="Rate of Interest Requested"
														value={`${user.roiAsked} %`}
														disabled
													/>
													<label htmlFor="rate_of_interest">
														Rate of Interest Requested
													</label>
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-floating">
													<input
														type="text"
														className={"form-control"}
														name="tenure"
														id="tenure"
														placeholder="Tenure Requested(in months)"
														value={`${user.tenureAsked} months`}
														disabled
													/>
													<label htmlFor="tenure">
														Tenure Requested(in months)
													</label>
												</div>
											</div>

											{/* -----------------------------------------------------
													Approve Loan
											---------------------------------------------------------*/}

											<h3 className="menu-title fs-3 mt-4 fw-bold">
												Approve Loan
											</h3>

											<div className="col-md-12">
												<div className="form-floating">
													<input
														type="text"
														className={`form-control ${
															errors.amountApproved && touched.amountApproved
																? "is-invalid"
																: touched.amountApproved
																? "is-valid"
																: ""
														}`}
														name="amountApproved"
														id="amountApproved"
														placeholder="amount"
														value={values.amountApproved}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="amountApproved">Amount</label>
													{errors.amountApproved && touched.amountApproved ? (
														<div className="form-error form-validation-warning text-danger">
															{errors.amountApproved}
														</div>
													) : null}
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-floating">
													<input
														className={`form-control 
																	${
																		errors.minRoiApproved &&
																		touched.minRoiApproved
																			? "is-invalid"
																			: touched.minRoiApproved
																			? "is-valid"
																			: ""
																	}`}
														name="minRoiApproved"
														id="minRoiApproved"
														placeholder="Rate of Interest"
														value={values.minRoiApproved}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="minRoiApproved">
														Rate of Interest
													</label>
													{errors.minRoiApproved && touched.minRoiApproved ? (
														<div className="form-error form-validation-warning text-danger">
															{errors.minRoiApproved}
														</div>
													) : null}
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-floating">
													<input
														type="text"
														className={`form-control 
															${
																errors.tenureApproved && touched.tenureApproved
																	? "is-invalid"
																	: touched.tenureApproved
																	? "is-valid"
																	: ""
															}`}
														name="tenureApproved"
														id="tenureApproved"
														placeholder="tenure"
														value={values.tenureApproved}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="tenureApproved">
														Tenure(in months)
													</label>
													{errors.tenureApproved && touched.tenureApproved ? (
														<div className="form-error form-validation-warning text-danger">
															{errors.tenureApproved}
														</div>
													) : null}
												</div>
											</div>
										</div>

										<div className="row mt-4 justify-content-center">
											<button
												type="submit"
												className="btn col-3 btn-warning w-20 py-3 btn-warning">
												{Icons.update} Update
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UpdateLoanDetails;
