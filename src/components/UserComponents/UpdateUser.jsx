import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contextAPI/UserContext";
import { useHandleValidation } from "../../hooks/useHandleValidation";
import { UpdateSchema } from "../../schemas";
import { Icons } from "../../icons/Icons";
import { ApiCall } from "../../functions/ApiCall";

function UpdateUser({ user, setIsEditing, setLoading }) {
	const { token } = useContext(UserContext);
	// console.log(user);
	const [validPIN, setValidPIN] = useState(true);
	const [loading, setDetailsLoading] = useState(false);
	const [postOffice, setPostOffice] = useState([]);
	const [validIFSC, setValidIFSC] = useState(false);
	const [bankLoading, setBankLoading] = useState(false);
	const [pinChanged, setPinChanged] = useState(false);
	const [ifscChanged, setIfscChanged] = useState(false);
	const [empTypeChanged, setEmpTypeChanged] = useState(false);
	let [color, setColor] = useState("black");

	setColor = (status) => {
		status === 1 ? (color = "green") : (color = "red");
		return color;
	};
	const url = `/users/${user?.uid}`;

	let api = `http://localhost:4000/api/v1/update/user/admin/${user?.uid}`;

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

	// -------------------------------------------------
	// 	Fetch Bank Detals
	// -------------------------------------------------
	useEffect(() => {
		fetchBank();
	}, [values.ifsc_code]);

	const fetchBank = async () => {
		if (values.ifsc_code.length === 11) {
			setValidIFSC(true);
			setBankLoading(true);
			setIfscChanged(true);

			const config = {
				method: "get",
				url: "https://ifsc.razorpay.com/" + values.ifsc_code,
				headers: { "Content-Type": "application/json" },
			};

			try {
				let response = await ApiCall(config);

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

	// -------------------------------------------------
	// 	Fetch PIN Code
	// -------------------------------------------------
	useEffect(() => {
		fetchDistrict();
	}, [values.pinCode]);

	const fetchDistrict = async () => {
		if (values.pinCode.length === 6) {
			setPinChanged(true);
			setDetailsLoading(true);

			const config = {
				method: "get",
				url: "https://api.postalpincode.in/pincode/" + values.pinCode,
				headers: { "Content-Type": "application/json" },
			};

			try {
				let response = await ApiCall(config);

				if (response.data[0].Status === "Success") {
					setValidPIN(true);
					setPostOffice(response.data[0].PostOffice);
					values.city = response.data[0].PostOffice[0].District;
					values.state = response.data[0].PostOffice[0].State;
					setDetailsLoading(false);
				} else {
					setDetailsLoading(false);
					setValidPIN(false);
					values.city = "";
					values.state = "";
					console.log("Something went wrong");
				}
			} catch (error) {
				setDetailsLoading(false);
				setValidPIN(false);
				values.city = "";
				values.state = "";
				console.log("Something went wrong");
			}
		}
	};

	return (
		<>
			<div
				className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
				data-wow-delay="0.1s">
				<h6 className="position-relative d-inline text-primary ps-4">
					Update User Details
				</h6>
				<h2 className="mt-2">User's Details Can be changed here</h2>
			</div>

			<div className="container px-lg-5">
				<div className="row justify-content-center">
					<div className="col-lg-11 mt-4">
						<div
							className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="row">
								<div className="col-md-12 p-4">
									<button
										className="btn btn-light float-end col-2 "
										onClick={() => {
											setIsEditing(false);
										}}>
										Back
									</button>

									<div className="d-flex justify-content-start align-items-center mt-5">
										<div className="ms-3">
											<h3 className="menu-title fs-1 fw-bold">
												{user.firstName + " " + user.lastName}
											</h3>
											<div className="menu-text fs-5 fw-0 mb-2">
												{user.email}
											</div>
											<h6 className="menu-text fs-6 mb-1 fw-bold">
												Active Status
											</h6>
											<div
												className="menu-text fs-6 mt-0"
												style={{
													color: setColor(user.isActive),
												}}>
												{user.isActive === 1 ? "Yes" : "No"}
											</div>
										</div>
									</div>

									<hr className="mb-3" />

									<form
										action=""
										onSubmit={handleSubmit}
										className="needs-validation"
										noValidate>
										<div className="row justify-content-center g-3 m-2 mb-4">
											{/* -------------------------------------------------
													Personal Detals Section
											-----------------------------------------------------*/}

											<h3 className="menu-title fs-3 mt-4 fw-bold">
												Personal Details
											</h3>
											<div className="col-md-6">
												<div className="form-floating">
													<input
														name="contact"
														className={`form-control ${
															errors.contact && touched.contact
																? "is-invalid"
																: touched.contact
																? "is-valid"
																: ""
														}`}
														id="contact"
														placeholder="Contact"
														value={values.contact}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="contact">Contact</label>
													{errors.contact && touched.contact ? (
														<div className="form-error form-validation-warning text-danger">
															{errors.contact}
														</div>
													) : null}
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-floating">
													<input
														className={`form-control ${
															errors.aadhaar && touched.aadhaar
																? "is-invalid"
																: touched.aadhaar
																? "is-valid"
																: ""
														}`}
														name="aadhaar"
														id="aadhaar"
														placeholder="Aadhaar"
														value={values.aadhaar}
														disabled
													/>
													<label htmlFor="aadhaar">Aadhaar</label>
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-floating">
													<input
														className={`form-control ${
															errors.pan && touched.pan
																? "is-invalid"
																: touched.pan
																? "is-valid"
																: ""
														}`}
														name="pan"
														id="pan"
														placeholder="PAN"
														value={values.pan}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="pan">PAN</label>
													{errors.pan && touched.pan ? (
														<div className="form-error form-validation-warning text-danger">
															{errors.pan}
														</div>
													) : null}
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-floating">
													<input
														className={`form-control ${
															(errors.pinCode && touched.pinCode) ||
															(!validPIN && touched.pinCode)
																? "is-invalid"
																: touched.pinCode
																? "is-valid"
																: ""
														}`}
														name="pinCode"
														id="pinCode"
														placeholder="Pin Code"
														value={values.pinCode}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="pinCode">Pin Code</label>
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
																Please enter a valid Pin Code.
															</div>
														)
													) : null}
												</div>
											</div>

											{pinChanged ? (
												<div className="col-md-6">
													<div className="form-floating">
														<select
															type="text"
															className="form-control"
															name="postOffice"
															id="postOffice"
															placeholder="Post Office"
															value={values.postOffice}
															onChange={handleChange}
															required>
															{validPIN
																? postOffice.map((area, index) => {
																		// console.log(postOffice);
																		return (
																			<option key={index} value={area.Name}>
																				{area.Name}
																			</option>
																		);
																  })
																: null}
														</select>
														<label htmlFor="postOffice">Post Office</label>
													</div>
												</div>
											) : (
												<div className="col-md-6">
													<div className="form-floating">
														<input
															className="form-control"
															name="postOffice1"
															id="postOffice1"
															placeholder="Post Office"
															value={values.postOffice}
															disabled
														/>
														<label htmlFor="postOffice1">Post Office</label>
													</div>
												</div>
											)}

											<div className="col-md-6">
												<div className="form-floating">
													<input
														className="form-control"
														name="city"
														id="city"
														placeholder="City"
														value={values.city}
														disabled
													/>
													<label htmlFor="city">City</label>
												</div>
											</div>

											<div className="col-md-12">
												<div className="form-floating">
													<input
														className="form-control"
														name="state"
														id="state"
														placeholder="State"
														value={values.state}
														disabled
													/>
													<label htmlFor="state">State</label>
												</div>
											</div>

											{/* -------------------------------------------------
													Employment Detail Section
											-----------------------------------------------------*/}
											<h3 className="menu-title fs-3 mt-4 fw-bold">
												Employment Details
											</h3>

											<div className="col-md-6">
												<div className="form-floating">
													<select
														className="form-select"
														name="employment_type"
														id="employment_type"
														placeholder="Employment Type"
														value={values.employment_type}
														onChange={(event) => {
															handleChange(event);
															setEmpTypeChanged(true);
														}}>
														{values.employment_type === "Salaried" ? (
															<>
																<option value="Salaried">Salaried</option>
																<option value="Self-employed">
																	Self Employed
																</option>
															</>
														) : (
															<>
																<option value="Self-employed">
																	Self Employed
																</option>
																<option value="Salaried">Salaried</option>
															</>
														)}
													</select>
													<label htmlFor="employment_type">
														Employment Type
													</label>
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-floating">
													<input
														className={`form-control ${
															errors.monthly_income && touched.monthly_income
																? "is-invalid"
																: touched.monthly_income
																? "is-valid"
																: ""
														}`}
														name="monthly_income"
														id="monthly_income"
														placeholder="Monthly Income"
														value={values.monthly_income}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="monthly_income">Monthly Income</label>
													{errors.monthly_income && touched.monthly_income ? (
														<div className="form-error form-validation-warning text-danger">
															{errors.monthly_income}
														</div>
													) : null}
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-floating">
													<input
														className={`form-control ${
															errors.professional_email &&
															touched.professional_email
																? "is-invalid"
																: touched.professional_email
																? "is-valid"
																: ""
														}`}
														name="professional_email"
														id="professional_email"
														placeholder="Professional Email"
														value={values.professional_email}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="professional_email">
														Professional Email
													</label>
													{errors.professional_email &&
													touched.professional_email ? (
														<div className="form-error form-validation-warning text-danger">
															{errors.professional_email}
														</div>
													) : null}
												</div>
											</div>

											{values.employment_type === "Self-employed" ? (
												<>
													<div className="col-md-6">
														<div className="form-floating">
															<input
																className={`form-control ${
																	errors.business_nature &&
																	touched.business_nature
																		? "is-invalid"
																		: touched.business_nature
																		? "is-valid"
																		: ""
																}`}
																name="business_nature"
																id="business_nature"
																placeholder="Nature of Business"
																value={values.business_nature}
																onChange={(event) => {
																	setFieldValue("company_name", "N/A");
																	handleChange(event);
																}}
																onBlur={handleBlur}
															/>
															<label htmlFor="business_nature">
																Nature of Business
															</label>
															{errors.business_nature &&
															touched.business_nature ? (
																<div className="form-error form-validation-warning text-danger">
																	{errors.business_nature}
																</div>
															) : null}
														</div>
													</div>
												</>
											) : (
												<>
													<div className="col-md-6">
														<div className="form-floating">
															<input
																className={`form-control ${
																	errors.company_name && touched.company_name
																		? "is-invalid"
																		: touched.company_name
																		? "is-valid"
																		: ""
																}`}
																name="company_name"
																id="company_name"
																placeholder="Company Name"
																value={values.company_name}
																onChange={(event) => {
																	setFieldValue("business_nature", "N/A");
																	handleChange(event);
																}}
																onBlur={handleBlur}
															/>
															<label htmlFor="company_name">Company Name</label>
															{errors.company_name && touched.company_name ? (
																<div className="form-error form-validation-warning text-danger">
																	{errors.company_name}
																</div>
															) : null}
														</div>
													</div>
												</>
											)}

											{/* -------------------------------------------------
													Bank Details Section
											-----------------------------------------------------*/}
											<h3 className="menu-title fs-3 mt-4 fw-bold">
												Bank Details
											</h3>

											<div className="col-md-6">
												<div className="form-floating">
													<input
														className={`form-control ${
															errors.account_number && touched.account_number
																? "is-invalid"
																: touched.account_number
																? "is-valid"
																: ""
														}`}
														name="account_number"
														id="account_number"
														placeholder="Account Number"
														value={values.account_number}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="account_number">Account Number</label>
													{errors.account_number && touched.account_number ? (
														<div className="form-error form-validation-warning text-danger">
															{errors.account_number}
														</div>
													) : null}
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-floating">
													<input
														className={`form-control ${
															errors.ifsc_code && touched.ifsc_code
																? "is-invalid"
																: touched.ifsc_code
																? "is-valid"
																: ""
														}`}
														name="ifsc_code"
														id="ifsc_code"
														placeholder="IFSC Code"
														value={values.ifsc_code}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="ifsc_code">IFSC Code</label>
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
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-floating">
													<input
														className="form-control"
														name="branch_name"
														id="branch_name"
														placeholder="Branch"
														value={values.branch_name}
														disabled
													/>
													<label htmlFor="branch_name">Branch</label>
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-floating">
													<input
														className="form-control"
														name="bank_name"
														id="bank_name"
														placeholder="Bank"
														value={values.bank_name}
														disabled
													/>
													<label htmlFor="bank_name">Bank</label>
												</div>
											</div>

											<div className="row mt-4 justify-content-center">
												<button
													type="submit"
													className="btn col-3 btn-warning w-20 py-3 btn-warning"
													onClick={(e) => {
														setLoading(true);
														setIsEditing(false);
														handleSubmit(e);
													}}
													disabled={loading}>
													{Icons.update} Update
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UpdateUser;
