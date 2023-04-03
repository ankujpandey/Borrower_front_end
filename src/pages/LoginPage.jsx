import React, { useContext, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ApiCall } from "../functions/ApiCall";

function LoginComponent(props) {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email);
		console.log(password);
		setEmail("");
		setPassword("");

		const config = {
			method: "get",
			url: `http://localhost:4000/api/v1/logIn/?email=${email}&password=${password}`,
			headers: { "Content-Type": "application/json" },
		};

		let data = await ApiCall(config);

		if (data.status === 201) {
			// setFlag(true);
			console.log(data.data);
			setUser(data?.data?.data);
			localStorage.setItem("localUser", JSON.stringify(data?.data?.data));
			navigate("/dashboard");
		} else {
			alert("Something went wrong!!!");
		}
	};

	return (
		<div>
			<div className="py-5 bg-primary hero-header mb-3">
				<div className="container py-3 px-5">
					<div className="row mt-5">
						<div className="col-12 text-center">
							<div data-wow-delay="0.1s">
								<h1 className="text-white animated zoomIn">Sign-In</h1>
							</div>
							<hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
							<nav aria-label="breadcrumb"></nav>
						</div>
					</div>
				</div>

				<div className="container px-lg-5">
					<div className="row justify-content-center">
						<div className="col-lg-5">
							<div
								className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
								data-wow-delay="0.3s">
								<form action="" onSubmit={(e) => handleSubmit(e)}>
									<div className="row justify-content-center g-3 m-3 mb-4">
										<div className="col-12">
											<div className="form-floating">
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
											<div className="form-floating">
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

										<div className="form-floating">
											<div className="alert alert-danger" role="alert">
												{/* <svg className="bi" role="img" aria-label="Danger:">
								<use xlinkHref="#exclamation-triangle-fill" />
							</svg> */}
												<div className="mt-0">
													Please enter valid details!!!
												</div>
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
