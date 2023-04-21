import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useHandleValidation } from "../hooks/useHandleValidation";

function EmiCalculator(props) {
	const { user, token } = useContext(UserContext);
	const url = "/register3";
	const api = "http://localhost:4000/api/v1/createEmployment";
	const [companies, setCompanies] = useState([]);
	// const [companyName, setCompanyName] = useState("");

	const initialValuescalculate = {
		loanAmount: "",
		rateOfInterest: "",
		loanTenure: "",
	};

	const {
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
	} = useHandleValidation(initialValuescalculate, "", url, api, token);

	return (
		<div className="container-xxl py-5">
			<div className="container px-lg-5">
				<div className="row g-5">
					<div className="col-lg-6">
						<img
							className="img-fluid wow zoomIn"
							data-wow-delay="0.5s"
							src="img/about.jpg"
						/>
					</div>
					<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
						<div className="section-title position-relative mb-4 pb-2">
							<h6 className="position-relative text-primary ps-4">
								EMI Calculator
							</h6>
							<h2 className="mt-2">
								Calculate EMI based on the amount you need, tenure and rate of
								interest of loan!
							</h2>
						</div>
						<div className="card shadow p-3 bg-body-tertiary rounded wow fadeInUp">
							<div className="row justify-content-center m-3 mb-1">
								{/* <label htmlFor="customRange1" className="form-label">
									Loan Amount
								</label> */}
								{/* <input type="range" className="form-range" id="customRange1" /> */}
								<div className="col-md-6">
									<div className="form-floating">
										<input
											type="text"
											className="form-control"
											id="loanAmmount"
											name="loanAmmount"
											value={values.loanAmmount}
											placeholder="Loan Ammount"
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<input
											type="range"
											className="form-range"
											id="loanAmmount"
											min="1000"
											max="100000"
											step="1000"
											// defaultValue={1000}
											value={values.loanAmmount ? values.loanAmmount : 0}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<label htmlFor="loanAmmount">Loan Amount</label>
									</div>
								</div>

								{/* <label htmlFor="customRange1" className="form-label">
									Rate of Intrest
								</label> */}
								{/* <input type="range" className="form-range" id="customRange1" /> */}
								<div className="col-md-6">
									<div className="form-floating">
										<input
											type="text"
											className="form-control"
											id="roi"
											name="roi"
											placeholder="Rate of Intrest"
											value={values.roi}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<input
											type="range"
											className="form-range"
											id="roi"
											min="12"
											max="40"
											step="2"
											value={values.roi ? values.roi : 0}
											onChange={handleChange}
											onBlur={handleBlur}
										/>

										<label htmlFor="roi">
											Rate of Intrest<small>(%)</small>
										</label>
									</div>
								</div>

								{/* <label htmlFor="customRange1" className="form-label">
									Loan Tenure
								</label> */}
								{/* <input type="range" className="form-range" id="customRange1" /> */}
								<div className="col-md-6">
									<div className="form-floating">
										<input
											type="text"
											className="form-control"
											id="loanTenure"
											name="loanTenure"
											placeholder="Loan Tenure"
											value={values.loanTenure}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<input
											type="range"
											className="form-range range-design"
											id="loanTenure"
											min="3"
											max="40"
											step="1.0"
											// defaultValue={3}
											value={values.loanTenure ? values.loanTenure : 0}
											onChange={handleChange}
											onBlur={handleBlur}
										/>

										<label htmlFor="loanTenure">
											Loan Tenure<small>(in month)</small>
										</label>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-floating">
										<input
											type="date"
											className="form-control"
											id="date"
											name="date"
											placeholder="Date of Start"
											value={values.date}
											onChange={handleChange}
											onBlur={handleBlur}
										/>

										<label htmlFor="date">Date of Start</label>
									</div>
								</div>
								<div className="d-flex justify-content-center mt-2">
									<button className="btn btn-primary rounded-pill px-4">
										Calculate
									</button>
									{/* <a className="btn btn-outline-primary btn-square me-3" href="">
								<i className="fab fa-facebook-f" />
							</a>
							<a className="btn btn-outline-primary btn-square me-3" href="">
								<i className="fab fa-twitter" />
							</a>
							<a className="btn btn-outline-primary btn-square me-3" href="">
								<i className="fab fa-instagram" />
							</a>
							<a className="btn btn-outline-primary btn-square" href="">
								<i className="fab fa-linkedin-in" />
							</a> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmiCalculator;
