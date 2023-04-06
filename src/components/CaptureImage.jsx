import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Webcam from "react-webcam"; //npm i react-webcam

import { useFaceDetection } from "react-use-face-detection"; //npm i react-use-face-detection
import FaceDetection from "@mediapipe/face_detection"; //npm i @mediapipe/face_detection
import { Camera } from "@mediapipe/camera_utils"; //npm i @mediapipe/camera_utils
import AadharUploadComponent from "./AadharUploadComponent";

function CaptureImage(props) {
<<<<<<< HEAD
	const [image, setImage] = useState(null);
	const [seconds, setSeconds] = useState(0);
	const { id } = useParams();
	const [flag, setFlag] = useState(false);
	const [warning, setWarning] = useState(false);
	const navigate = useNavigate();
=======
  const [image, setImage] = useState(null);
  const [seconds, setSeconds] = useState(10);
  const { id } = useParams();
  const [flag, setFlag] = useState(false);
  const [warning, setWarning] = useState(false);
>>>>>>> 3380610c821e3f9c98cfa71bf1a7b14c94010e6f

  let picture = null;

  //Face Detection------->>>>
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

  //Image Capturing--------->>>>>>>>
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
  }, [seconds]);

	// const biometicBlob = async (base64) => {
	// 	await fetch(base64).then(async (res) => setBioImage(await res.blob()));
	// };

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
				localStorage.setItem("capImg", JSON.stringify(picture));
			}
		}, 2000);
	};

	console.log("image section renderd");

	// if (isLoading) {
	// 	return null;
	// }

	return (
		<div>
			<div>
				<div className="row justify-content-center g-3 m-3">
					{image ? (
						<>
							{/* {window.location.reload(false)} */}

							<div className="row justify-content-center col-md-12">
								<div className="col-md-8">
									<img src={image} className="biometric-image" />
								</div>

								<div className="alert alert-success col-md-12" role="alert">
									Image captured succesfully!!!
								</div>

								<div className="col-md-4">
									<button
										className="btn btn-primary w-100 py-2 btn-primary"
										onClick={() => {
											setFlag(!flag);
											setSeconds(10);
											setImage(null);
											setWarning(false);
											clickImage();
											window.location.reload(false);
										}}>
										Retake
									</button>
								</div>

								<div className="col-md-4">
									<button
										className="btn btn-primary w-100 py-2 btn-primary"
										onClick={() => {
											window.location.href = "/register4";
											// navigate("/register4");
										}}>
										Next Page
									</button>
								</div>
							</div>
						</>
					) : (
						<div className="row justify-content-center">
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
							<div className="col-md-12">
								{warning ? (
									<div>
										<div className="form-floating">
											<div className="alert alert-danger" role="alert">
												{/* <svg className="bi" role="img" aria-label="Danger:">
								<use xlinkHref="#exclamation-triangle-fill" />
							</svg> */}
												<div className="mt-0">
													Image can only be clicked when there is only one
													person in the frame!! Curently, the number of faces
													recognised are {facesDetected}
												</div>
											</div>
										</div>

										<button
											className="btn btn-primary w-100 py-2 btn-primary"
											onClick={() => {
												setFlag(!flag);
												setSeconds(10);
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
											setSeconds(2);
											clickImage();
										}}>
										Take Picture
									</button>
								)}
							</div>
						</div>
					)}

					{seconds > 0 ? <div className="seconds">{seconds}</div> : null}
				</div>
			</div>
		</div>
	);
}

export default CaptureImage;
