import React, { useEffect, useState } from "react";
// import axios from "axios"; //npm i axios
import { Link } from "react-router-dom";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { RegistrationInitialValues, RegistrationSchema } from "../schemas";

function Register() {
	const url = "/address";

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useHandleValidation(RegistrationInitialValues, RegistrationSchema, url);

	return (
		<div>
			<div className="py-5 bg-primary hero-header mb-3">
				<div className="container py-3 px-5">
					<div className="row mt-5">
						<div className="col-12 text-center">
							<div data-wow-delay="0.1s">
								<h1 class="text-white animated zoomIn mt-5">Registration</h1>
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
				class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
				data-wow-delay="0.1s">
				<h6 class="position-relative d-inline text-primary ps-4">
					Initial Registration
				</h6>
				<h2 class="mt-2">Please enter the following details...</h2>
			</div>

			<div class="container px-lg-5">
				<div class="row justify-content-center">
					<div class="col-lg-11">
						<div className="card wow fadeInUp" data-wow-delay="0.3s">
							<form
								action=""
								onSubmit={handleSubmit}
								className="needs-validation"
								novalidate>
								<div class="row justify-content-center g-3 m-3 mb-4">
									<label className="col-form-label">First Name</label>
									<input
										type="text"
										className="form-control"
										name="firstName"
										value={values.firstName}
										disabled
									/>

									<label className="col-form-label">Last Name</label>
									<input
										type="text"
										className="form-control"
										name="lastName"
										value={values.lastName}
										disabled
									/>

									<label className="col-form-label">Contact</label>
									<input
										type="text"
										className="form-control"
										name="Contact"
										value={values.Contact}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.Contact && touched.Contact ? (
										<div className="form-error">{errors.Contact}</div>
									) : null}

									<label className="col-form-label">Email</label>
									<input
										type="text"
										className="form-control"
										name="Email"
										value={values.Email}
										disabled
									/>

									<label className="col-form-label">PAN</label>
									<input
										type="text"
										className="form-control"
										name="PAN"
										value={values.PAN}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.PAN && touched.PAN ? (
										<div className="form-error">{errors.PAN}</div>
									) : null}

									<label className="col-form-label">Aadhaar</label>
									<input
										type="text"
										className="form-control"
										name="Aadhaar"
										value={values.Aadhaar}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.Aadhaar && touched.Aadhaar ? (
										<div className="form-error">{errors.Aadhaar}</div>
									) : null}

									{/* <Link to="/register2"> */}
									<button type="submit" className="btn btn-success mt-3">
										Submit
									</button>
									{/* </Link> */}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
