import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Webcam from "react-webcam"; //npm i react-webcam

import { useFaceDetection } from "react-use-face-detection"; //npm i react-use-face-detection
import FaceDetection from "@mediapipe/face_detection"; //npm i @mediapipe/face_detection
import { Camera } from "@mediapipe/camera_utils"; //npm i @mediapipe/camera_utils
import AadharUploadComponent from "./AadharUploadComponent";
import { UserImageContext } from "../context/UserImageContext";
import { useCounter } from "../hooks/useCounter";

function CamOpener(props) {
	const { setImage } = useContext(UserImageContext);
	const { count } = useCounter(2);
	// const { id } = useParams();
	const [flag, setFlag] = useState(false);
	const [warning, setWarning] = useState(false);
	const navigate = useNavigate();

	let picture = null;

	// ---------------------------------------------------------------
	//  Face Detection
	// ---------------------------------------------------------------
	const { webcamRef, isLoading, boundingBox, facesDetected } = useFaceDetection(
		{
			faceDetectionOptions: {
				model: "short",
			},
			faceDetection: new FaceDetection.FaceDetection({
				locateFile: (file) =>
					`https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
			}),
			camera: ({ mediaSrc, onFrame, width, height }) =>
				new Camera(mediaSrc, {
					onFrame,
					width,
					height,
				}),
		}
	);

	// const biometicBlob = async (base64) => {
	// 	await fetch(base64).then(async (res) => setBioImage(await res.blob()));
	// };

	// ---------------------------------------------------------------
	//  Click Image
	// ---------------------------------------------------------------
	const clickImage = () => {
		setTimeout(async () => {
			if (facesDetected != 1) {
				setWarning(true);
			} else {
				picture = webcamRef?.current?.getScreenshot({
					width: 400,
					height: 400,
				});

				console.log("pic clicked");
				setImage(picture);
				// console.log("image----", image);

				navigate("/register");
			}
		}, 2000);
	};

	return (
		<div>
			{console.log("camera")}
			{boundingBox.map((box, index) => (
				<div
					key={`${index + 1}`}
					style={{
						border: "2px solid green",
						position: "absolute",
						top: `${box.yCenter * 80}%`,
						left: `${box.xCenter * 95}%`,
						width: `${box.width * 100}%`,
						height: `${box.height * 100}%`,
						zIndex: 1,
					}}
				/>
			))}
			<Webcam
				style={{
					width: "600px",
					height: "500px",
					position: "relative",
					//marginBottom: "20px",
					marginLeft: "auto",
					marginRight: "auto",
				}}
				ref={webcamRef}
			/>
			<div className="col-md-4">
				{warning ? (
					<div>
						<div className="form-floating">
							<div className="alert alert-danger" role="alert">
								{/* <svg className="bi" role="img" aria-label="Danger:">
								<use xlinkHref="#exclamation-triangle-fill" />
							</svg> */}
								<div className="mt-0">
									Image can only be clicked when there is only one person in the
									frame!! Curently, the number of faces recognised are{" "}
									{facesDetected}
								</div>
							</div>
						</div>

						<button
							className="btn btn-primary w-100 py-2 btn-primary"
							onClick={() => {
								setFlag(!flag);
								setImage(null);
								setWarning(false);
								clickImage();
							}}>
							Retake
						</button>
					</div>
				) : (
					<button
						// type="submit"
						className="btn btn-primary w-100 py-3 btn-primary"
						onClick={() => {
							clickImage();
						}}>
						Take Picture
					</button>
				)}
			</div>
		</div>
	);
}

export default CamOpener;