import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHandleValidation } from "../hooks/useHandleValidation";

import PasswordStrengthBar from "react-password-strength-bar";

import {
	SignUpschema,
	initialValuesSignupschema,
} from "../schemas/Signupschema";

function SignUpPage(props) {
	const url = "/dashboard";

	const api = "http://localhost:4000/api/v1/user";

<<<<<<< HEAD
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useHandleValidation(initialValuesSignupschema, SignUpschema, url, api);

	useEffect(() => {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		const forms = document.querySelectorAll(".needs-validation");

		// Loop over them and prevent submission
		Array.from(forms).forEach((form) => {
			form.addEventListener(
				"focusout",
				(event) => {
					if (!form.checkValidity()) {
						event.preventDefault();
						event.stopPropagation();
					}

					form.classList.add("was-validated");
				},
				false
			);
		});
	}, []);

	return (
		<>
			<div className="py-5 bg-primary hero-header mb-3">
				<div className="container py-3 px-5">
					<div className="row mt-5">
						<div className="col-12 text-center">
							<div data-wow-delay="0.1s">
								<h1 class="text-white animated zoomIn">Sign-Up</h1>
							</div>
							<hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
							<nav aria-label="breadcrumb"></nav>
						</div>
					</div>
				</div>

				<div class="container px-lg-5">
					<div class="row justify-content-center">
						<div class="col-lg-5">
							<div className="card wow fadeInUp" data-wow-delay="0.3s">
								<form
									action=""
									onSubmit={handleSubmit}
									className="needs-validation"
									novalidate>
									<div class="row justify-content-center g-3 m-3 mb-4">
										<div className="col-md-6">
											<div class="form-floating">
												<input
													type="text"
													class="form-control"
													id="firstName"
													name="firstName"
													placeholder="First Name"
													value={values.firstName}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<label for="firstName">First Name</label>
												{errors.firstName && touched.firstName ? (
													<p className="form-error form-validation-warning text-danger">
														{errors.firstName}
													</p>
												) : null}
											</div>
										</div>

										<div className="col-md-6">
											<div class="form-floating">
												<input
													type="text"
													className="form-control"
													id="lastName"
													name="lastName"
													placeholder="Last Name"
													value={values.lastName}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<label for="lastName">Last Name</label>
												{errors.lastname && touched.lastname ? (
													<p className="form-error form-validation-warning text-danger">
														{errors.lastName}
													</p>
												) : null}
											</div>
										</div>
										<div className="col-12">
											<div class="form-floating">
												<input
													type="email"
													className="form-control"
													id="email"
													name="email"
													placeholder="Please enter your Email"
													value={values.email}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<label htmlFor="email">Email</label>
												{errors.email && touched.email ? (
													<p className="form-error form-validation-warning text-danger">
														{errors.email}
													</p>
												) : null}
											</div>
										</div>
										<div className="col-12">
											<div class="form-floating">
												<input
													type="password"
													className="form-control"
													id="password"
													name="password"
													placeholder="Please enter your password"
													value={values.password}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<label htmlFor="password">Password</label>
												{errors.password && touched.password ? (
													<p className="form-error form-validation-warning text-danger">
														{errors.password}
													</p>
												) : null}
											</div>
										</div>
										<div className="col-12">
											<div class="form-floating">
												<input
													type="password"
													className="form-control"
													id="Confirmpassword"
													name="Confirmpassword"
													placeholder="Please enter your Confirm password"
													value={values.Confirmpassword}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<label htmlFor="Confirmpassword">
													Confirm Password
												</label>
												{errors.Confirmpassword && touched.Confirmpassword ? (
													<p className="form-error form-validation-warning text-danger">
														{errors.Confirmpassword}
													</p>
												) : null}
											</div>
										</div>
										<div className="col-12">
											{/* <NavLink to="/dashboard"> */}
											<button
												type="submit"
												className="btn btn-primary w-100 py-3 btn-primary">
												Sign-Up
											</button>
											{/* </NavLink> */}
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
=======
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(initialValuesSignupschema, SignUpschema, url, api);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Please enter your First name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName ? (
                <p className="form-error text-danger">{errors.firstName}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Please enter your Last name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastname && touched.lastname ? (
                <p className="form-error text-danger">{errors.lastName}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Please enter your Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error text-danger">{errors.email}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Please enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <PasswordStrengthBar
                className="mt-3"
                password={values.password}
              />
              {errors.password && touched.password ? (
                <p className="form-error text-danger">{errors.password}</p>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="Confirmpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="Confirmpassword"
                name="Confirmpassword"
                placeholder="Please enter your Confirm password"
                value={values.Confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.Confirmpassword && touched.Confirmpassword ? (
                <p className="form-error text-danger">
                  {errors.Confirmpassword}
                </p>
              ) : null}
            </div>

            {/* <NavLink to="/Sign-in"> */}
            <button type="submit" className="btn btn-primary">
              Sign-Up
            </button>
            {/* </NavLink> */}
          </form>
        </div>
      </div>
    </div>
  );
>>>>>>> 035746a68596ddfaaead62b34eb07a273077a50d
}

export default SignUpPage;
