import React from "react";
import AadharUploadComponent from "../components/AadharUploadComponent";
import CaptureImage from "../components/CaptureImage";

function Register3(props) {
	return (
		<div>
			{/* For camera  */}
			<CaptureImage />

			<AadharUploadComponent />
			{/* Aadhar Uploader and verification of aadhar image and camera image */}
		</div>
	);
}

export default Register3;
