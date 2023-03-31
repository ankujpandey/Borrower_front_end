import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Address(props) {
	const [validPIN, setVaidPIN] = useState(false);
	const [loading, setLoading] = useState(false);
	const [pinCode, setPinCode] = useState("");
	const [district, setDistrict] = useState("");
	const [state, setState] = useState("");
	const [postOffice, setPostOffice] = useState([]);
	const [PO, setPO] = useState("");

	useEffect(() => {
		fetchDistrict();
	}, [pinCode]);

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log("form submitted");
		console.log("Pin Code: ", pinCode);
		console.log("Post Office: ", PO);
		console.log("District: ", district);
		console.log("State: ", state);
	};

	const fetchDistrict = async () => {
		if (pinCode.length == 6) {
			setLoading(true);
			// console.log(pinCode);
			try {
				const response = await axios.get(
					"https://api.postalpincode.in/pincode/" + pinCode,
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);

				if (response.data[0].Status === "Success") {
					setVaidPIN(true);
					//   console.log(
					//     "District-->",
					//     response.data[0].PostOffice[0].District,
					//     ", State--->",
					//     response.data[0].PostOffice[0].State
					//   );
					// console.log(response.data[0].Status);
					setDistrict(response.data[0].PostOffice[0].District);
					setState(response.data[0].PostOffice[0].State);
					setPostOffice(response.data[0].PostOffice);
					setLoading(false);
					//   console.log("postOffice", response.data[0].PostOffice);
				} else {
					setVaidPIN(false);
					console.log("Something went wrong");
				}
			} catch (error) {
				setVaidPIN(false);
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
												className="form-control"
												name="PinCode"
												id="PinCode"
												onChange={(event) => {
													setPinCode(event.target.value);
												}}
												required
											/>
											<label htmlFor="PinCode">PIN Code</label>

											{/* Add CSS for class loading-msg */}
											{loading ? (
												<div className="loading-msg">Please Wait...</div>
											) : pinCode.length != 6 ? (
												// && form.touched.PinCode
												<div className="form-error">Enter valid PIN Code</div>
											) : validPIN ? null : (
												<div className="form-error">Enter valid PIN Code</div>
											)}
										</div>
									</div>

									<div className="col-md-6">
										<div className="form-floating">
											<select
												type="text"
												className="form-select"
												name="PostOffice"
												id="PostOffice"
												onChange={(event) => setPO(event.target.value)}>
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
												name="District"
												id="District"
												disabled
												value={district}
												onChange={(event) => {
													setDistrict(event.target.value);
												}}
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
												value={state}
												onChange={(event) => {
													setState(event.target.value);
												}}
											/>
											<label htmlFor="State">State</label>
										</div>
									</div>

									<div className="col-12">
										{loading ? (
											<button
												type="submit"
												className="btn btn-primary w-100 py-3 btn-primary"
												disabled>
												Submit
											</button>
										) : (
											<NavLink to="/borrowing-details">
												<button
													type="submit"
													className="btn btn-primary w-100 py-3 btn-primary">
													Submit
												</button>
											</NavLink>
										)}
									</div>

									{/* {loading ? null : (
										<NavLink to="/borrowing-details">
											<button type="submit" className="btn btn-success mt-3">
												Submit
											</button>
										</NavLink>
									)} */}
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
