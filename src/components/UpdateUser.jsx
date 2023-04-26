import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { UpdateSchema } from "../schemas";
import { Icons } from "../icons/Icons";
import axios from "axios";

function UpdateUser({ user }) {
	const { token } = useContext(UserContext);
	// console.log(token);
	const [validPIN, setValidPIN] = useState(true);
	const [loading, setLoading] = useState(false);
	const [postOffice, setPostOffice] = useState([]);
	const [validIFSC, setValidIFSC] = useState(false);
	const [bankLoading, setBankLoading] = useState(false);
	const [pinChanged, setPinChanged] = useState(false);
	const [ifscChanged, setIfscChanged] = useState(false);
	const [empTypeChanged, setEmpTypeChanged] = useState(false);
	let [color, setColor] = useState("black");

	setColor = (status) => {
		status == 1 ? (color = "green") : (color = "red");
		return color;
	};
	const url = "/admin-dashboard";

	let api = "http://localhost:4000/api/v1/update/user/admin/" + user.uid;

	const UpdateInitialValues = {
		contact: user.contact,
		aadhaar: user.aadhaar,
		pan: user.pan,
		pinCode: user.pinCode,
		postOffice: user.postOffice,
		city: user.city,
		state: user.state,
		employment_type: user.employment_type,
		monthly_income: user.monthly_income,
		professional_email: user.professional_email,
		business_nature: user.business_nature,
		company_name: user.company_name,
		account_number: user.account_number,
		ifsc_code: user.ifsc_code,
		bank_name: user.bank_name,
		branch_name: user.branch_name,
		uid: user.uid,
		updatedBy: "admin",
	};

	const {
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
	} = useHandleValidation(UpdateInitialValues, UpdateSchema, url, api, token);

	useEffect(() => {
		values.company_name = "";
		values.professional_email = "";
		values.business_nature = "";
		values.monthly_income = "";
	}, [empTypeChanged]);

	useEffect(() => {
		fetchBank();
	}, [values.ifsc_code]);

	const fetchBank = async () => {
		if (values.ifsc_code.length == 11) {
			setValidIFSC(true);
			setBankLoading(true);
			setIfscChanged(true);

			try {
				const response = await axios.get(
					"https://ifsc.razorpay.com/" + values.ifsc_code,
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				if (response.status === 200) {
					values.bank_name = response.data.BANK;
					values.branch_name = response.data.BRANCH;
					setBankLoading(false);
				}
			} catch (error) {
				values.bank_name = "";
				values.branch_name = "";
				setValidIFSC(false);
				setBankLoading(false);
			}
		}
	};

	useEffect(() => {
		fetchDistrict();
	}, [values.pinCode]);

	const fetchDistrict = async () => {
		if (values.pinCode.length == 6) {
			setPinChanged(true);
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
					values.city = "";
					values.state = "";
					console.log("Something went wrong");
				}
			} catch (error) {
				setLoading(false);
				setValidPIN(false);
				values.city = "";
				values.state = "";
				console.log("Something went wrong");
			}
		}
	};

	return (
		<div className="container px-lg-5">
			<div className="row justify-content-center">
				<div className="col-lg-11 mt-4">
					<div
						className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
						data-wow-delay="0.3s">
						<div className="row">
							<div className="col-md-12 p-4">
								<div className="d-flex justify-content-start align-items-center mt-5">
									<div className="ms-3">
										<h3 className="menu-title fs-1 fw-bold">
											{user.firstName + " " + user.lastName}
										</h3>
										<div className="menu-text fs-5 fw-0 mb-2">{user.email}</div>
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
									<h3 className="menu-title fs-3 my-3 fw-bold">
										Personal Details
									</h3>

									<label htmlFor="contact">Contact</label>
									<input
										className="form-control"
										name="contact"
										id="contact"
										value={values.contact}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.contact && touched.contact ? (
										<div className="form-error form-validation-warning text-danger">
											{errors.contact}
										</div>
									) : null}

									<label htmlFor="aadhaar">Aadhaar</label>
									<input
										className="form-control"
										name="aadhaar"
										id="aadhaar"
										value={values.aadhaar}
										disabled
									/>

									<label htmlFor="pan">PAN</label>
									<input
										className="form-control"
										name="pan"
										id="pan"
										value={values.pan}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.pan && touched.pan ? (
										<div className="form-error form-validation-warning text-danger">
											{errors.pan}
										</div>
									) : null}

									<label htmlFor="pinCode">Pin Code</label>
									<input
										className="form-control"
										name="pinCode"
										id="pinCode"
										value={values.pinCode}
										onChange={handleChange}
										onBlur={handleBlur}
										disabled={pinChanged && validPIN}
									/>
									{errors.pinCode && touched.pinCode ? (
										<div className="form-error form-validation-warning text-danger">
											{errors.pinCode}
										</div>
									) : null}

									{loading ? (
										<div className="loading-msg">Please Wait...</div>
									) : pinChanged ? (
										validPIN ? null : (
											<div className="form-error form-validation-warning text-danger">
												Please enter a Valid Pin
											</div>
										)
									) : null}

									<label htmlFor="postOffice">Post Office</label>
									{pinChanged ? (
										<select
											type="text"
											className="form-select"
											name="postOffice"
											id="postOffice"
											placeholder="Post Office"
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
									) : (
										<input
											className="form-control"
											name="postOffice"
											id="postOffice"
											value={values.postOffice}
											disabled
										/>
									)}

									<label htmlFor="city">City</label>
									<input
										className="form-control"
										name="city"
										id="city"
										value={values.city}
										disabled
									/>

									<label htmlFor="state">State</label>
									<input
										className="form-control"
										name="state"
										id="state"
										value={values.state}
										disabled
									/>

									<hr className="mb-3" />

									<h3 className="menu-title fs-3 my-3 fw-bold">
										Employment Details
									</h3>
									<label htmlFor="employment_type">Employment Type</label>
									<select
										className="form-select"
										name="employment_type"
										id="employment_type"
										value={values.employment_type}
										onChange={(event) => {
											handleChange(event);
											setEmpTypeChanged(true);
										}}>
										{values.employment_type == "Salaried" ? (
											<>
												<option value="Salaried">Salaried</option>
												<option value="Self-employed">Self Employed</option>
											</>
										) : (
											<>
												<option value="Self-employed">Self Employed</option>
												<option value="Salaried">Salaried</option>
											</>
										)}
									</select>

									<label htmlFor="monthly_income">Monthly Income</label>
									<input
										className="form-control"
										name="monthly_income"
										id="monthly_income"
										value={values.monthly_income}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.monthly_income && touched.monthly_income ? (
										<div className="form-error form-validation-warning text-danger">
											{errors.monthly_income}
										</div>
									) : null}

									<label htmlFor="professional_email">Professional Email</label>
									<input
										className="form-control"
										name="professional_email"
										id="professional_email"
										value={values.professional_email}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.professional_email && touched.professional_email ? (
										<div className="form-error form-validation-warning text-danger">
											{errors.professional_email}
										</div>
									) : null}

									{values.employment_type === "Self-employed" ? (
										<>
											<label htmlFor="business_nature">
												Nature of Business
											</label>
											<input
												className="form-control"
												name="business_nature"
												id="business_nature"
												value={values.business_nature}
												onChange={(event) => {
													setFieldValue("company_name", "N/A");
													handleChange(event);
												}}
												onBlur={handleBlur}
											/>
											{errors.business_nature && touched.business_nature ? (
												<div className="form-error form-validation-warning text-danger">
													{errors.business_nature}
												</div>
											) : null}
										</>
									) : (
										<>
											<label htmlFor="company_name">Company Name</label>
											<input
												className="form-control"
												name="company_name"
												id="company_name"
												value={values.company_name}
												onChange={(event) => {
													setFieldValue("business_nature", "N/A");
													handleChange(event);
												}}
												onBlur={handleBlur}
											/>
											{errors.company_name && touched.company_name ? (
												<div className="form-error form-validation-warning text-danger">
													{errors.company_name}
												</div>
											) : null}
										</>
									)}

									<hr className="mb-3" />

									<h3 className="menu-title fs-3 my-3 fw-bold">Bank Details</h3>

									<label htmlFor="account_number">Account Number</label>
									<input
										className="form-control"
										name="account_number"
										id="account_number"
										value={values.account_number}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.account_number && touched.account_number ? (
										<div className="form-error form-validation-warning text-danger">
											{errors.account_number}
										</div>
									) : null}

									<label htmlFor="ifsc_code">IFSC</label>
									<input
										className="form-control"
										name="ifsc_code"
										id="ifsc_code"
										value={values.ifsc_code}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.ifsc_code && touched.ifsc_code ? (
										<div className="form-error form-validation-warning text-danger">
											{errors.ifsc_code}
										</div>
									) : null}

									{bankLoading ? (
										<div className="loading-msg">Please Wait...</div>
									) : ifscChanged ? (
										validIFSC ? null : (
											<div className="form-error form-validation-warning text-danger">
												Please enter a Valid IFSC Code.
											</div>
										)
									) : null}

									<label htmlFor="branch_name">Branch</label>
									<input
										className="form-control"
										name="branch_name"
										id="branch_name"
										value={values.branch_name}
										disabled
									/>

									<label htmlFor="bank_name">Bank</label>
									<input
										className="form-control"
										name="bank_name"
										id="bank_name"
										value={values.bank_name}
										disabled
									/>

									<div className=" row mt-3 justify-content-center">
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
	);
}

export default UpdateUser;
