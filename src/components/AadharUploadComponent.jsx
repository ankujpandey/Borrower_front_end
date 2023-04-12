import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserImageContext } from "../context/UserImageContext";
import { UserContext } from "../context/UserContext";
import { ApiCall } from "../functions/ApiCall";

function AadharUploadComponent(props) {
	const { image, setImage } = useContext(UserImageContext);
	const { user } = useContext(UserContext);

	console.log(user);

	let formData = new FormData();

	useEffect(async () => {
		handleImage();
	}, []);

	const handleImage = async () => {
		const img = await JSON.parse(localStorage.getItem("capImg"));

		if (img) {
			setImage(img);
			localStorage.removeItem("capImg");
		}
	};

	// submit button handle

	const handlesubmit = async (e) => {
		e.preventDefault();
		formData.append("biometric", image);
		console.log("form data------>>>>", formData.get("aadharBiometric"));
		const config = {
			method: "post",
			url: `http://localhost:4000/api/v1/uploadImage/${user?.userName?.uid}`,
			headers: { "Content-Type": "multipart/form-data" },
			data: formData,
		};

		let response = await ApiCall(config);

		console.log(response);

		console.log("form data------>>>>", formData.get("aadharBiometric"));
		console.log("form data------>>>>", formData.get("aadharBiometric"));
		console.log("form data------>>>>", formData.get("aadharBiometric"));
	};

	if (!image) {
		return <>Loading...</>;
	}

	return (
		// ----------------------------------------------------
		// 	Input Aadhaar
		// ----------------------------------------------------

		<form
			action=""
			onSubmit={(e) => handlesubmit(e)}
			className="needs-validation"
			noValidate>
			<div className="row justify-content-center g-3">
				<div className="col-md-12">
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

				<div className="col-md-12">
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
				<div className="col-4">
					<button
						type="submit"
						className="btn btn-primary w-100 py-3 btn-primary">
						Upload
					</button>
				</div>
			</div>
		</form>
	);
}

export default AadharUploadComponent;
