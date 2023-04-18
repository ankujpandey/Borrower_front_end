import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserImageContext } from "../context/UserImageContext";
import { UserContext } from "../context/UserContext";
import { ApiCall } from "../functions/ApiCall";

function AadharUploadComponent(props) {
	const { image } = useContext(UserImageContext);
	const { user, token } = useContext(UserContext);
	const [passed, setPassed] = useState(false);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	console.log(user);

	let formData = new FormData();

	formData.append("biometric", image);
	formData.append("userInfo", user?.userName);

	// submit button handle

	const handlesubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		console.log("form data------>>>>", formData.get("biometric"));
		const config = {
			method: "post",
			url: `http://localhost:4000/api/v1/uploadImage/${user?.userName?.uid}`,
			headers: { "Content-Type": "multipart/form-data", authorization: token },
			data: formData,
		};

		let response = await ApiCall(config);

		// console.log("response---------->>>>>>>", response.status);

		if (response.status === 201) {
			setLoading(false);
			if (response.data.data.authentication.score < 0.35) {
				alert("Aadhaar Authentication Failed!");
				setPassed(false);
			} else {
				alert("Aadhaar Authentication Passed!");
				setPassed(true);
			}
		}

		console.log(response);

		console.log("form data------>>>>", formData.get("biometric"));
		console.log("form data------>>>>", formData.get("aadharBiometric"));
		console.log("form data------>>>>", formData.get("aadharBiometric"));
	};

	if (!image) {
		return (
			<div className="d-flex justify-content-center">
				<div className="loader"></div>
			</div>
		);
	}

	// if (loading) {
	// 	return (
	// 		<div className="d-flex justify-content-center">
	// 			<div className="loader"></div>
	// 		</div>
	// 	);
	// }

	return (
		// ----------------------------------------------------
		// 	Input Aadhaar
		// ----------------------------------------------------

		<form
			action=""
			onSubmit={(e) => handlesubmit(e)}
			className="needs-validation form-section"
			noValidate>
			<div className="row justify-content-center align-items-center g-3">
				<div className={`${loading ? "loader" : ""}`}></div>
				<div className={`col-md-12 ${loading ? "row-loader" : ""}`}>
					<div className="form-floating">
						<input
							className="form-control"
							type="file"
							id="aadharfrontfile"
							onChange={(e) => {
								console.log(e.target.files[0]);
								formData.append("aadharBiometric", e.target.files[0]);
							}}
						/>
						<label htmlFor="aadharfrontfile">
							Upload Front Side Aadhar card
						</label>
					</div>
				</div>

				<div className={`col-md-12 ${loading ? "row-loader" : ""}`}>
					<div className="form-floating">
						<input
							className="form-control"
							type="file"
							id="aadharbackendsidefile"
							onChange={(e) => {
								console.log(e.target.files[0]);
								formData.append("aadharBiometric", e.target.files[0]);
							}}
						/>
						<label htmlFor="aadharbackendsidefile">
							Upload Back Side Aadhar card
						</label>
					</div>
				</div>

				{/*---------------------------------------------------------
					Upload Button
			 	--------------------------------------------------------*/}

				{passed ? (
					<div className={`col-4 ${loading ? "row-loader" : ""}`}>
						<button
							className="btn btn-primary w-100 py-3 btn-primary"
							onClick={() => {
								navigate("/bank-details");
								setPassed(false);
							}}>
							Next
						</button>
					</div>
				) : (
					<div className={`col-4 ${loading ? "row-loader" : ""}`}>
						<button
							type="submit"
							className="btn btn-primary w-100 py-3 btn-primary">
							Upload
						</button>
					</div>
				)}
			</div>
		</form>
	);
}

export default AadharUploadComponent;
