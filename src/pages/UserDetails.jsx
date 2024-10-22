import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ApiCall } from "../functions/ApiCall";
import { Icons } from "../icons/Icons";
import { saveAs } from "file-saver";
import { UserContext } from "../contextAPI/UserContext";
import UpdateUser from "../components/UserComponents/UpdateUser";
import UpdateLoanDetails from "../components/LoanComponents/UpdateLoanDetails";
import LoanDisbursement from "../components/LoanComponents/LoanDisbursement";

function UserDetails(props) {
	const { id } = useParams();
	const [isData, setIsData] = useState(false);
	const { user, token } = useContext(UserContext);
	const [userDetails, setUserDetails] = useState({});
	const [userImage, setUserImage] = useState();
	const [isEditing, setIsEditing] = useState(false);
	const [loanDisburse, setLoanDisburse] = useState(false);
	const [updateLoanDetails, setUpdateLoanDetail] = useState(false);
	const [loading, setLoading] = useState(false);
	const [startLoader, setStartLoader] = useState(false);

	const navigate = useNavigate();

	let [color, setColor] = useState("black");

	setColor = (status) => {
		status === 1 ? (color = "green") : (color = "red");
		return color;
	};

	useEffect(() => {
		if (user) {
			fetchData(id);
			fetchImage(id);
		}

		setLoading(false);
	}, [loading, isEditing, startLoader, user, updateLoanDetails]);

	// -------------------------------------------
	//  Fetch User's all data
	// -------------------------------------------

	const fetchData = async (id) => {
		console.log(id);
		const config = {
			method: "get",
			url: `http://localhost:4000/api/v1/getAllData/${id}`,
			headers: { "Content-Type": "application/json" },
		};

		let response = await ApiCall(config);
		if (response.status === 201) {
			setIsData(true);
			console.log("user data--->", response.data.data[0]);
			localStorage.setItem(
				"userDetails",
				JSON.stringify(response.data.data[0])
			);
			setUserDetails(response?.data?.data[0]);
			console.log("userDetails------>>>>>", userDetails.Loan_state);
			console.log(user);
		} else {
			setIsData(false);
			// alert("Something went wrong!!!");
		}
	};

	// ------------------------------------------
	//  Fetch User's Image
	// ------------------------------------------

	const fetchImage = async (id) => {
		console.log(id);
		const con = {
			method: "get",
			url: `http://localhost:4000/api/v1/getImage/${id}`,
			headers: { "Content-Type": "application/json", authorization: token },
		};

		let response = await ApiCall(con);
		if (response.status === 201) {
			setIsData(true);
			console.log(response?.data?.data[0]);
			await setUserImage(response?.data?.data[0]);
			//   console.log("users Image ------------>>>>>>>", userImage.profile_photo);
		} else {
			setIsData(false);
			alert("Something went wrong!!!");
		}
	};

	// ------------------------------------------
	//  download pdf
	// ------------------------------------------

	const handlepdfDownload = async (id) => {
		try {
			const config = {
				method: "get",
				url: `http://localhost:4000/api/v1/createPdf/${id}`,
				responseType: "blob",
			};
			let response = await ApiCall(config);
			console.log("==========response", response);
			if (response.status === 200) {
				setStartLoader(false);
				console.log(response.data);
				const pdfBlob = new Blob([response.data], { type: "application/pdf" });
				saveAs(pdfBlob, `user_${id}.pdf`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	// -----------------------------------------------
	//  Delete Button functionality
	// -----------------------------------------------
	const handleDeleteUser = async (id) => {
		const deleteConfig = {
			method: "delete",
			url: `http://localhost:4000/api/v1/user/${id}`,
			headers: { "Content-Type": "application/json", authorization: token },
		};
		let response = await ApiCall(deleteConfig);

		if (response.status === 201) {
			// console.log(response);
			navigate("/admin-dashboard");
		} else {
			alert("Something went wrong!!!");
		}
	};

	if (!isData) {
		return (
			<div className="container px-lg-5">
				<div className="row justify-content-center">
					<div className="col-lg-11 mt-4">
						<div
							className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
							data-wow-delay="0.3s">
							No data available!!
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<>
			<div className="py-5 bg-primary hero-header mb-3">
				<div className="container py-3 px-5">
					<div className="row mt-5">
						<div className="col-12 text-center">
							<div data-wow-delay="0.1s">
								<h1 className="text-white animated zoomIn mt-5">
									User Details...
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
			{/* Editing Page Component */}
			{isEditing ? (
				<UpdateUser
					user={userDetails}
					setIsEditing={setIsEditing}
					setLoading={setLoading}
				/>
			) : updateLoanDetails ? (
				<UpdateLoanDetails
					user={userDetails}
					setUpdateLoanDetail={setUpdateLoanDetail}
					setColor={setColor}
				/>
			) : loanDisburse ? (
				<LoanDisbursement
					user={userDetails}
					setLoanDisburse={setLoanDisburse}
					setLoading={setLoading}
				/>
			) : (
				<>
					<div className="container px-lg-5">
						<div className="row justify-content-center">
							<div className="col-lg-11 mt-4">
								<div
									className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
									data-wow-delay="0.3s">
									<div className="row justify-content-center align-items-center">
										<div className={`${startLoader ? "loader" : ""}`}></div>
										<div
											className={`col-md-12 ${
												startLoader ? "row-loader" : ""
											}`}>
											<div className="col-md-12 p-4">
												<NavLink
													to={
														user.jobAssignees_id
															? "/agent-dashboard"
															: "/admin-dashboard"
													}>
													<button className="btn btn-light float-end col-2 ">
														Back
													</button>
												</NavLink>
												<div className="d-flex justify-content-start align-items-center mt-5">
													{!userImage?.profile_photo ? (
														<div className="d-flex justify-content-center">
															<div
																className="card d-flex justify-content-center align-items-center"
																style={{ width: "150px", height: "150px" }}>
																{Icons.person}
															</div>
														</div>
													) : (
														<div className="d-flex justify-content-center">
															<img
																src={`data:image/jpg;base64,${userImage?.profile_photo}`}
																className="img-thumbnail"
																alt=""
																height={150}
																width={150}
															/>
														</div>
													)}
													<div className="ms-3">
														<h3 className="menu-title fs-1 fw-bold">
															{userDetails.firstName +
																" " +
																userDetails.lastName}
														</h3>
														<div className="menu-text fs-5 fw-0 mb-2">
															{userDetails.email}
														</div>
														<h6 className="menu-text fs-6 mb-1 fw-bold">
															Active Status
														</h6>
														<div
															className="menu-text fs-6 mt-0"
															style={{
																color: setColor(userDetails.isActive),
															}}>
															{userDetails.isActive === 1 ? "Yes" : "No"}
														</div>
													</div>
												</div>

												<hr />
												{/* ------------------------------------------
                           							 Personal Details Section
                        						----------------------------------------------*/}
												<h3 className="menu-title fs-3 mt-4 fw-bold">
													Personal Details
												</h3>

												<ul className="list-group ">
													<li className="list-group-item">
														{Icons.call} {userDetails.contact}
														<span className="float-end text-secondary">
															Contact
														</span>
													</li>
													<li className="list-group-item">
														{Icons.pan} {userDetails.pan}
														<span className="float-end text-secondary">
															PAN
														</span>
													</li>
													<li className="list-group-item">
														{Icons.aadhar} {userDetails.aadhaar}
														<span className="float-end text-secondary">
															Aadhaar
														</span>
													</li>
													<li className="list-group-item">
														{Icons.location} {userDetails.postOffice},{" "}
														{userDetails.city}, {userDetails.state},{" "}
														{userDetails.pinCode}
														<span className="float-end text-secondary">
															Location
														</span>
													</li>
												</ul>

												{/* ------------------------------------------
                        							    Employment Details Section
                      							----------------------------------------------*/}
												<h3 className="menu-title fs-3 mt-4 fw-bold">
													Employment Details
												</h3>

												<ul className="list-group ">
													<li className="list-group-item">
														{Icons.employmentType} {userDetails.employment_type}
														<span className="float-end text-secondary">
															Employment Type
														</span>
													</li>
													{userDetails.company_name &&
													!userDetails.company_name === "N/A" ? (
														<li className="list-group-item">
															{Icons.workPlace} {userDetails.company_name}
															<span className="float-end text-secondary">
																Company Name
															</span>
														</li>
													) : null}
													<li className="list-group-item">
														{Icons.email} {userDetails.professional_email}
														<span className="float-end text-secondary">
															Professional Email
														</span>
													</li>
													{userDetails.business_nature &&
													!userDetails.business_nature === "N/A" ? (
														<li className="list-group-item">
															{Icons.bussiness} {userDetails.business_nature}
															<span className="float-end text-secondary">
																Nature of Bussiness
															</span>
														</li>
													) : null}
													<li className="list-group-item">
														{Icons.salary} {userDetails.monthly_income}
														<span className="float-end text-secondary">
															Monthly Income
														</span>
													</li>
												</ul>

												{/* ------------------------------------------
                          								  Bank Details Section
                       							 ----------------------------------------------*/}
												<h3 className="menu-title fs-3 mt-4 fw-bold">
													Bank Details
												</h3>

												<ul className="list-group ">
													<li className="list-group-item">
														{Icons.account} {userDetails.account_number}
														<span className="float-end text-secondary">
															Account Number
														</span>
													</li>

													<li className="list-group-item">
														{Icons.searchWorld} {userDetails.ifsc_code}
														<span className="float-end text-secondary">
															IFSC
														</span>
													</li>

													<li className="list-group-item">
														{Icons.pin} {userDetails.branch_name}
														<span className="float-end text-secondary">
															Branch
														</span>
													</li>

													<li className="list-group-item">
														{Icons.bank} {userDetails.bank_name}
														<span className="float-end text-secondary">
															Bank
														</span>
													</li>
												</ul>

												{/* ------------------------------------------
                         								   Loan Details Section
                    						    ----------------------------------------------*/}
												<h3 className="menu-title fs-3 mt-4 fw-bold">
													Loan Details
												</h3>

												<ul className="list-group ">
													<li className="list-group-item">
														{Icons.salary} {userDetails.amountAsked}
														<span className="float-end text-secondary">
															Amount
														</span>
													</li>

													<li className="list-group-item">
														{Icons.roi} {userDetails.roiAsked}
														<span className="float-end text-secondary">
															Rate of Interest
														</span>
													</li>

													<li className="list-group-item">
														{Icons.tenure} {userDetails.tenureAsked}
														<span className="float-end text-secondary">
															Tenure
														</span>
													</li>

													<li className="list-group-item">
														{Icons.agent} {userDetails.AgentName}
														<span className="float-end text-secondary">
															Assigned To
														</span>
													</li>
												</ul>

												<div className="row justify-content-center mt-5 mb-2">
													<div className="col-3">
														<button
															type="button"
															className="btn btn-success w-100 py-3 btn-success"
															onClick={() => {
																setStartLoader(true);
																handlepdfDownload(id);
															}}
															disabled={startLoader}>
															{Icons.download} Download
														</button>
													</div>

													<div className="col-3">
														<button
															type="button"
															className="btn btn-warning w-100 py-3 btn-warning"
															onClick={() => {
																setIsEditing(true);
															}}
															disabled={startLoader}>
															{Icons.edit} Edit
														</button>
													</div>

													{!user.jobAssignees_id ? (
														<div className="col-3">
															<button
																type="button"
																className="btn btn-danger w-100 py-3 btn-danger"
																onClick={() => handleDeleteUser(id)}
																disabled={startLoader}>
																{Icons.delete} Delete User
															</button>
														</div>
													) : null}

													{user?.jobAssignees_id &&
													userDetails?.Loan_state === "1300" ? (
														<div className="col-3">
															<button
																type="button"
																className="btn btn-primary w-100 py-3 btn-primary"
																onClick={() => {
																	setUpdateLoanDetail(true);
																}}
																disabled={startLoader}>
																{Icons.salary} Verify Loan
															</button>
														</div>
													) : null}

													{userDetails.Loan_state === "1500" ? (
														<div className="col-3">
															<button
																type="button"
																className="btn btn-primary w-100 py-3 btn-primary"
																onClick={() => {
																	setLoanDisburse(true);
																}}
																disabled={startLoader}>
																{Icons.salary} Disburse Loan
															</button>
														</div>
													) : null}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default UserDetails;
