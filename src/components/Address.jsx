import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { AddressInitialValues, AddressSchema } from "../schemas";

function Address(props) {
	const { user, token } = useContext(UserContext);
	console.log("token at address", token);

	const url = "/employment-details";

	let api = "http://localhost:4000/api/v1/user_info/" + user?.signUp?.uid;

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useHandleValidation(AddressInitialValues, AddressSchema, url, api, token);

	const [validPIN, setValidPIN] = useState(false);
	const [loading, setLoading] = useState(false);
	const [postOffice, setPostOffice] = useState([]);

	useEffect(() => {
		fetchDistrict();
	}, [values.pinCode]);

	const fetchDistrict = async () => {
		if (values.pinCode.length == 6) {
			setLoading(true);

			try {
				const response = await axios.get(
					"https://api.postalpincode.in/pincode/" + values.pinCode,
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);

				if (response.data[0].Status === "Success") {
					setValidPIN(true);
					setPostOffice(response.data[0].PostOffice);
					values.city = response.data[0].PostOffice[0].District;
					values.state = response.data[0].PostOffice[0].State;
					setLoading(false);
				} else {
					setLoading(false);
					setValidPIN(false);
					console.log("Something went wrong");
				}
			} catch (error) {
				setLoading(false);
				setValidPIN(false);
				console.log("Something went wrong");
			}
		}
	};
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
					Address Details
				</h6>
				<h2 className="mt-2">Please enter the following details...</h2>
			</div>

			<div className="container px-lg-5">
				<div className="row justify-content-center">
					<div className="col-lg-10">
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
													(errors.pinCode || !validPIN) && touched.pinCode
														? "is-invalid"
														: touched.pinCode
														? "is-valid"
														: ""
												}`}
												name="pinCode"
												id="pinCode"
												disabled={validPIN}
												value={values.pinCode}
												onBlur={handleBlur}
												onChange={(event) => {
													handleChange(event);
												}}
											/>
											<label htmlFor="PinCode">PIN Code</label>

											{errors.pinCode && touched.pinCode ? (
												<div className="form-error form-validation-warning text-danger">
													{errors.pinCode}
												</div>
											) : null}

											{/* Add CSS for class loading-msg */}
											{loading ? (
												<div className="loading-msg">Please Wait...</div>
											) : values.pinCode.length < 6 ? null : validPIN ? null : (
												<div className="form-error form-validation-warning text-danger">
													Please enter a Valid Pin
												</div>
											)}
										</div>
									</div>

									<div className="col-md-6">
										<div className="form-floating">
											<select
												type="text"
												className="form-select"
												name="postOffice"
												id="postOffice"
												value={values.postOffice}
												onChange={handleChange}
												required>
												<option>Please select your area Post Office</option>

												{validPIN
													? postOffice.map((area, index) => {
															return (
																<option key={index} value={area.Name}>
																	{area.Name}
																</option>
															);
													  })
													: null}
											</select>
											<label htmlFor="PostOffice">Post Office</label>
										</div>
									</div>

									<div className="col-md-6">
										<div className="form-floating">
											<input
												type="text"
												className="form-control"
												name="city"
												id="city"
												disabled
												value={values.city}
											/>
											<label htmlFor="District">City</label>
										</div>
									</div>

									<div className="col-md-6">
										<div className="form-floating">
											<input
												type="text"
												className="form-control"
												name="State"
												id="State"
												disabled
												value={values.state}
											/>
											<label htmlFor="State">State</label>
										</div>
									</div>

									<div className="col-4">
										<button
											type="submit"
											className="btn btn-primary w-100 py-3 btn-primary"
											disabled={!(validPIN && values.postOffice != "")}>
											Submit
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

export default Address;
