import React, { useState } from "react";
import { Link } from "react-router-dom";

function AadharUploadComponent(props) {
	// store Aadhar data
	let formData = new FormData();

	// submit button handle

	const handlesubmit = (e) => {
		e.preventDefault();
		console.log("form data------>>>>", formData.get("frontendpart"));
		console.log("form data------>>>>", formData.get("backendpart"));
	};

	return (
		// ----------------------------------------------------
		// 	Input Aadhaar
		// ----------------------------------------------------

		<form
			action=""
			// onSubmit={(e) => handlesubmit(e)
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
