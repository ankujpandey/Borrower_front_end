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

	// const biometicBlob = async (base64) => {
	// 	return new Promise(async (resolve, reject) => {
	// 		await fetch(base64).then(async (res) => resolve(res.blob()));
	// 	});
	// };

	useEffect(async () => {
		handleImage();
	}, []);

	const handleImage = async () => {
		const img = await JSON.parse(localStorage.getItem("capImg"));

		if (img) {
			var myBlob = new Blob([img], { type: "text/plain" });
			console.log(myBlob);
			setImage(myBlob);

			// biometicBlob(img).then((res) => {
			// 	console.log(res);

			// });
			localStorage.removeItem("capImg");
		}
	};

	console.log("form data------>>>>", formData.get("biometric"));
	console.log("form data------>>>>", formData.get("frontendpart"));
	console.log("form data------>>>>", formData.get("backendpart"));

	// submit button handle

	const handlesubmit = async (e) => {
		e.preventDefault();
		formData.append("biometric", image, "profileImage.jpg");
		console.log("form data------>>>>", formData.get("biometric"));
		const config = {
			method: "post",
			url: `http://localhost:4000/api/v1/uploadImage/${user?.userName?.uid}`,
			headers: { "Content-Type": "multipart/form-data" },
			data: formData,
		};

		let response = await ApiCall(config);

		console.log(response);

		console.log("form data------>>>>", formData.get("biometric"));
		console.log("form data------>>>>", formData.get("frontendpart"));
		console.log("form data------>>>>", formData.get("backendpart"));
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
								formData.append("frontendpart", e.target.files[0]);
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
								formData.append("backendpart", e.target.files[0]);
							}}
						/>
						<label htmlFor="aadharbackendsidefile">
							Upload Back Side Aadhar card
						</label>
					</div>
				</div>
			</div>

			{/*---------------------------------------------------------
					Upload Button
			 -----------------------------------------------------------*/}
			<div className="col-md-4">
				{/* <Link to="/register4"> */}
				<button type="submit" className="btn btn-success mt-3">
					Upload
				</button>
				{/* </Link> */}
			</div>
		</form>
	);
}

export default AadharUploadComponent;
