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
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<form
					// onSubmit={(e) => handlesubmit(e)}
					>
						<div className="mb-3">
							<label htmlFor="aadharfrontfile" className="form-label">
								Upload Front Side Aadhar card
							</label>
							<input
								className="form-control"
								type="file"
								id="aadharfrontfile"
								onChange={(e) => {
									console.log(e.target.files[0]);
									formData.append("frontendpart", e.target.files[0]);
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="aadharbackendsidefile" className="form-label">
								Upload Back Side Aadhar card
							</label>
							<input
								className="form-control"
								type="file"
								id="aadharbackendsidefile"
								onChange={(e) =>
									formData.append("backendpart", e.target.files[0])
								}
							/>
						</div>
						<Link to="/register4">
							<button type="submit" className="btn btn-success mt-3">
								Submit
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AadharUploadComponent;
