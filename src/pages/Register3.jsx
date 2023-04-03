import React from "react";
import AadharUploadComponent from "../components/AadharUploadComponent";
import CaptureImage from "../components/CaptureImage";

function Register3(props) {
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
					ID Verification
				</h6>
				<h2 className="mt-2">Please enter the following details...</h2>
			</div>

			<div className="container px-lg-5">
				<div className="row justify-content-center">
					<div className="col-lg-11">
						<div
							className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="form-floating">
								{/* For camera  */}
								<CaptureImage />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register3;
