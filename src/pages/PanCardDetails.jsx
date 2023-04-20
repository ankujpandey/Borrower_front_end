import React, { useContext, useState } from "react";
import { ApiCall } from "../functions/ApiCall";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Icons } from "../icons/Icons";

function PanCardDetails(props) {
	const { user, token } = useContext(UserContext);
	let formData = new FormData();
	const [passed, setPassed] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handlesubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const config = {
			method: "post",
			url: `http://localhost:4000/api/v1/uploadPancard/${user?.userName?.uid}`,
			headers: { "Content-Type": "multipart/form-data", authorization: token },
			data: formData,
		};

		let response = await ApiCall(config);

		if (response.status === 201) {
			setLoading(false);
			if (response.data.data.verification.passed) {
				alert("PAN Authentication Failed!");
				setPassed(false);
			} else {
				alert("PAN Authentication Passed!");
				setPassed(true);
			}
		} else {
			alert("Somthing went wrong");
			setLoading(false);
		}

		console.log(response);

		// console.log("form data------>>>>", formData.get("biometric"));
		// console.log("form data------>>>>", formData.get("aadharBiometric"));
		// console.log("form data------>>>>", formData.get("aadharBiometric"));
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
					PAN Card Upload
				</h6>
				<h2 className="mt-2">Please uplod your PAN...</h2>
			</div>

			<div className="container px-lg-5">
				<div className="row justify-content-center ">
					<div className="col-lg-11">
						<div
							className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
							data-wow-delay="0.3s">
							<form
								action=""
								onSubmit={(e) => handlesubmit(e)}
								className="needs-validation"
								noValidate>
								<div className="row justify-content-center align-items-center g-3">
									<div className={`${loading ? "loader" : ""}`}></div>
									<div className={`col-md-12 ${loading ? "row-loader" : ""}`}>
										<div className="form-floating">
											<input
												className="form-control"
												type="file"
												id="aadharfrontfile"
												placeholder="PAN Card"
												onChange={(e) => {
													console.log(e.target.files[0]);
													formData.append("PAN_Card", e.target.files[0]);
												}}
												required
											/>
											<label htmlFor="aadharfrontfile">PAN Card</label>
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
													navigate("/dashboard");
													setPassed(false);
												}}>
												Next {Icons.next}
											</button>
										</div>
									) : (
										<div className={`col-4 ${loading ? "row-loader" : ""}`}>
											<button
												type="submit"
												className="btn btn-primary w-100 py-3 btn-primary">
												{Icons.upload} Upload
											</button>
										</div>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PanCardDetails;
