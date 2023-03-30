import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LoginComponent(props) {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		console.log(password);
		setEmail("");
		setPassword("");
	};
	return (
		<div>
			<div className="py-5 bg-primary hero-header mb-3">
				<div className="container py-3 px-5">
					<div className="row mt-5">
						<div className="col-12 text-center">
							<div data-wow-delay="0.1s">
								<h1 class="text-white animated zoomIn">Sign-In</h1>
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
									onSubmit={(e) => handleSubmit(e)}
									className="needs-validation"
									novalidate>
									<div class="row justify-content-center g-3 m-3 mb-4">
										<div className="col-12">
											<div class="form-floating">
												<input
													type="email"
													className="form-control"
													id="email"
													name="email"
													placeholder="Please enter your Email"
													onChange={(e) => {
														setEmail(e.target.value);
													}}
												/>
												<label htmlFor="email">Email</label>
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
													onChange={(e) => {
														setPassword(e.target.value);
													}}
												/>
												<label htmlFor="password">Password</label>
											</div>
										</div>

										<div className="col-12">
											{/* <NavLink to="/dashboard"> */}
											<button
												type="submit"
												className="btn btn-primary w-100 py-3 btn-primary">
												Sign-In
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
		</div>
	);
}

export default LoginComponent;
