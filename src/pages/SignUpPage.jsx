import { useHandleValidation } from "../hooks/useHandleValidation";
import PasswordStrengthBar from "react-password-strength-bar";
import { SignUpschema, initialValuesSignupschema } from "../schemas";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Icons } from "../icons/Icons";

function SignUpPage(props) {
	const { setUser } = useContext(UserContext);

	const url = "/dashboard";

	const api = "http://localhost:4000/api/v1/signUp";

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useHandleValidation(
			initialValuesSignupschema,
			SignUpschema,
			url,
			api,
			"",
			true
		);

	return (
		<>
			<div className="py-5 bg-primary hero-header mb-3">
				<div className="container py-3 px-5">
					<div className="row mt-5">
						<div className="col-12 text-center">
							<div data-wow-delay="0.1s">
								<h1 className="text-white animated zoomIn">Sign-Up</h1>
							</div>
							<hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
							<nav aria-label="breadcrumb"></nav>
						</div>
					</div>
				</div>

				<div className="container px-lg-5">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div
								className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
								data-wow-delay="0.3s">
								<form
									action=""
									onSubmit={handleSubmit}
									className="needs-validation"
									noValidate>
									<div className="row justify-content-center g-3 m-3 mb-4">
										<div className="col-md-6">
											<div className="form-floating">
												<input
													type="text"
													className={`form-control ${
														errors.firstName && touched.firstName
															? "is-invalid"
															: touched.firstName
															? "is-valid"
															: ""
													}`}
													id="firstName"
													name="firstName"
													placeholder="First Name"
													value={values.firstName}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<label htmlFor="firstName">
													{Icons.personIcon} First Name
												</label>
												{errors.firstName && touched.firstName ? (
													<p className="form-error form-validation-warning text-danger">
														{errors.firstName}
													</p>
												) : null}
											</div>
										</div>

										<div className="col-md-6">
											<div className="form-floating">
												<input
													type="text"
													className={`form-control ${
														errors.lastname && touched.lastname
															? "is-invalid"
															: touched.lastname
															? "is-valid"
															: ""
													}`}
													id="lastName"
													name="lastName"
													placeholder="Last Name"
													value={values.lastName}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<label htmlFor="lastName">
													{Icons.personIcon} Last Name
												</label>
												{errors.lastname && touched.lastname ? (
													<p className="form-error form-validation-warning text-danger">
														{errors.lastName}
													</p>
												) : null}
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<input
													type="email"
													className={`form-control ${
														errors.email && touched.email
															? "is-invalid"
															: touched.email
															? "is-valid"
															: ""
													}`}
													id="email"
													name="email"
													placeholder="Please enter your Email"
													value={values.email}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<label htmlFor="email">{Icons.email} Email</label>
												{errors.email && touched.email ? (
													<p className="form-error form-validation-warning text-danger">
														{errors.email}
													</p>
												) : null}
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<input
													type="password"
													className={`form-control ${
														errors.password && touched.password
															? "is-invalid"
															: touched.password
															? "is-valid"
															: ""
													}`}
													id="password"
													name="password"
													placeholder="Please enter your password"
													value={values.password}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<label htmlFor="password">
													{Icons.password} Password
												</label>
												{values.password.length > 0 ? (
													<PasswordStrengthBar
														className="mt-2"
														password={values.password}
													/>
												) : null}
												{errors.password && touched.password ? (
													<p className="form-error form-validation-warning text-danger">
														{errors.password}
													</p>
												) : null}
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<input
													type="password"
													className={`form-control ${
														errors.Confirmpassword && touched.Confirmpassword
															? "is-invalid"
															: touched.Confirmpassword
															? "is-valid"
															: ""
													}`}
													id="Confirmpassword"
													name="Confirmpassword"
													placeholder="Please enter your Confirm password"
													value={values.Confirmpassword}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<label htmlFor="Confirmpassword">
													{Icons.password} Confirm Password
												</label>
												{errors.Confirmpassword && touched.Confirmpassword ? (
													<p className="form-error form-validation-warning text-danger">
														{errors.Confirmpassword}
													</p>
												) : null}
											</div>
										</div>
										<div className="col-12">
											<button
												type="submit"
												className="btn btn-primary w-100 py-3 btn-primary">
												Sign-Up
											</button>
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
}

export default SignUpPage;
