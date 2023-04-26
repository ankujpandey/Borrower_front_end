import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { BorrowingInitialValues, BorrowingSchema } from "../schemas";
import { UserContext } from "../context/UserContext";

function BorrowingDetails() {
	const { user, token } = useContext(UserContext);

	const url = "/dashboard";
	const api = "http://localhost:4000/api/v1/createLoan";

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useHandleValidation(
			BorrowingInitialValues,
			BorrowingSchema,
			url,
			api,
			token
		);

	values.uid = user?.signUp?.uid;

	return (
		<div>
			<div className="py-5 bg-primary hero-header mb-3">
				<div className="container py-3 px-5">
					<div className="row mt-5">
						<div className="col-12 text-center">
							<div data-wow-delay="0.1s">
								<h1 className="text-white animated zoomIn mt-5">
									Registration
								</h1>
							</div>
							<hr
								className="bg-white mx-auto mt-0 mb-5"
								style={{ width: 90 }}
							/>
							<nav aria-label="breadcrumb"></nav>
						</div>
					</div>
				</div>
			</div>

			<div
				className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
				data-wow-delay="0.1s">
				<h6 className="position-relative d-inline text-primary ps-4">
					Loan Application
				</h6>
				<h2 className="mt-2">Please enter borrowing requirements...</h2>
			</div>

			<div className="container px-lg-5">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div
							className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
							data-wow-delay="0.3s">
							<form
								onSubmit={handleSubmit}
								className="needs-validation"
								noValidate>
								<div className="row justify-content-center g-3 m-3 mb-4">
									<div className="col-md-12">
										<div className="form-floating">
											<select
												className="form-select"
												name="rate_of_interest"
												id="rate_of_interest"
												placeholder="rate_of_interest"
												// value={values.rate_of_interest}
												onChange={handleChange}>
												{/* You can add the interest rates acording to you */}
												<option>Please select the rate of interest</option>
												<option value={5}>5 %</option>
												<option value={8}>8 %</option>
												<option value={10}>10 %</option>
											</select>
											<label htmlFor="rate_of_interest">Rate of Interest</label>
										</div>
									</div>

									<div className="col-md-12">
										<div className="form-floating">
											<input
												type="text"
												className={`form-control ${
													errors.amount && touched.amount
														? "is-invalid"
														: touched.amount
														? "is-valid"
														: ""
												}`}
												name="amount"
												id="amount"
												placeholder="amount"
												value={values.amount}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
											<label htmlFor="amount">Amount</label>
											{errors.amount && touched.amount ? (
												<div className="form-error form-validation-warning text-danger">
													{errors.amount}
												</div>
											) : null}
										</div>
									</div>

									<div className="col-md-12">
										<div className="form-floating">
											<input
												type="text"
												className={`form-control ${
													errors.tenure && touched.tenure
														? "is-invalid"
														: touched.tenure
														? "is-valid"
														: ""
												}`}
												name="tenure"
												id="tenure"
												placeholder="tenure"
												value={values.tenure}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
											<label htmlFor="tenure">Tenure(in months)</label>
											{errors.tenure && touched.tenure ? (
												<div className="form-error form-validation-warning text-danger">
													{errors.tenure}
												</div>
											) : null}
										</div>
									</div>
									<div className="col-4">
										<button
											type="submit"
											className="btn btn-primary w-100 py-3 btn-primary">
											Apply
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BorrowingDetails;