import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ApiCall } from "../functions/ApiCall";
import { Icons } from "../icons/Icons";
import { UserContext } from "../context/UserContext";
import { Icon } from "@mui/material";

function UserDetails(props) {
	const { id } = useParams();
	const [isData, setIsData] = useState(false);
	const { token } = useContext(UserContext);
	const [user, setUser] = useState([]);
	const [userImage, setUserImage] = useState();

	let [color, setColor] = useState("black");

	setColor = (status) => {
		status == 1 ? (color = "green") : (color = "red");
		return color;
	};

	const config = {
		method: "get",
		url: `http://localhost:4000/api/v1/getAllData/${id}`,
		headers: { "Content-Type": "application/json" },
	};

	useEffect(() => {
		fetchData();
		fetchImage();
	}, []);

	// -------------------------------------------
	//  Fetch User's all data
	// -------------------------------------------

	const fetchData = async () => {
		let response = await ApiCall(config);
		if (response.status === 201) {
			setIsData(true);
			console.log(response.data.data[0]);
			setUser(response?.data?.data[0]);
		} else {
			setIsData(false);
			// alert("Something went wrong!!!");
		}
	};

	// ------------------------------------------
	//  Ftech User's Image
	// ------------------------------------------

	const fetchImage = async () => {
		const con = {
			method: "get",
			url: `http://localhost:4000/api/v1/getImage/${id}`,
			headers: { "Content-Type": "application/json", authorization: token },
		};

		let response = await ApiCall(con);
		if (response.status === 201) {
			setIsData(true);
			console.log(response.data.data[0].profile_photo);
			await setUserImage(response?.data?.data[0]);
			console.log("users Image ------------>>>>>>>", userImage.profile_photo);
		} else {
			setIsData(false);
			alert("Something went wrong!!!");
		}
	};

	if (!isData) {
		return <h1>No data available!!</h1>;
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
			<div className="container px-lg-5">
				<div className="row justify-content-center">
					<div className="col-lg-11 mt-4">
						<div
							className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="row">
								<div className="col-md-12 p-4">
									<NavLink to="/admin-dashboard">
										<button
											type="submit"
											className="btn btn-light float-end col-2 ">
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
												{user.isActive == 1 ? "Yes" : "No"}
											</div>
										</div>
									</div>

									<hr />

									<h3 className="menu-title fs-3 mt-5 fw-bold">
										Personal Details
									</h3>

									<ul className="list-group ">
										<li className="list-group-item">
											{Icons.call} {user.contact}
											<span className="float-end text-secondary">Contact</span>
										</li>
										<li className="list-group-item">
											{Icons.pan} {user.pan}
											<span className="float-end text-secondary">PAN</span>
										</li>
										<li className="list-group-item">
											{Icons.aadhar} {user.aadhaar}
											<span className="float-end text-secondary">Aadhaar</span>
										</li>
										<li className="list-group-item">
											{Icons.location} {user.postOffice}, {user.city},{" "}
											{user.state}, {user.pinCode}.
											<span className="float-end text-secondary">Location</span>
										</li>
									</ul>

									<h3 className="menu-title fs-3 mt-5 fw-bold">
										Employment Details
									</h3>

									<ul className="list-group ">
										<li className="list-group-item">
											{Icons.employmentType} {user.employment_type}
											<span className="float-end text-secondary">
												Employment Type
											</span>
										</li>
										{user.company_name ? (
											<li className="list-group-item">
												{Icons.workPlace} {user.company_name}
												<span className="float-end text-secondary">
													Company Name
												</span>
											</li>
										) : null}
										<li className="list-group-item">
											{Icons.email} {user.professional_email}
											<span className="float-end text-secondary">
												Professional Email
											</span>
										</li>
										{user.business_nature ? (
											<li className="list-group-item">
												{Icons.bussiness} {user.business_nature}
												<span className="float-end text-secondary">
													Nature of Bussiness
												</span>
											</li>
										) : null}
										<li className="list-group-item">
											{Icons.salary} {user.monthly_income}
											<span className="float-end text-secondary">
												Monthly Income
											</span>
										</li>
									</ul>

									<h3 className="menu-title fs-3 mt-5 fw-bold">Bank Details</h3>

									<ul className="list-group ">
										<li className="list-group-item">
											{Icons.account} {user.account_number}
											<span className="float-end text-secondary">
												Account Number
											</span>
										</li>

										<li className="list-group-item">
											{Icons.searchWorld} {user.ifsc_code}
											<span className="float-end text-secondary">IFSC</span>
										</li>

										<li className="list-group-item">
											{Icons.pin} {user.branch_name}
											<span className="float-end text-secondary">Branch</span>
										</li>

										<li className="list-group-item">
											{Icons.bank} {user.bank_name}
											<span className="float-end text-secondary">Bank</span>
										</li>
									</ul>

									<div className="row justify-content-center mt-5 mb-2">
										<div className="col-3">
											<button
												type="button"
												className="btn btn-success w-100 py-3 btn-success"
												// onClick={() => {
												// 	handlepdfDownload(id);
												// }}
											>
												{Icons.download} Download
											</button>
										</div>

										<div className="col-3">
											<button
												type="button"
												className="btn btn-warning w-100 py-3 btn-warning">
												{Icons.update} Update
											</button>
										</div>

										<div className="col-3">
											<button
												type="button"
												className="btn btn-danger w-100 py-3 btn-danger"
												// onClick={() => handleDeleteApi(id)}
											>
												{Icons.delete} Delete User
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserDetails;
