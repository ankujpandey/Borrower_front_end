import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Webcam from "react-webcam"; //npm i react-webcam

import { useFaceDetection } from "react-use-face-detection"; //npm i react-use-face-detection
import FaceDetection from "@mediapipe/face_detection"; //npm i @mediapipe/face_detection
import { Camera } from "@mediapipe/camera_utils"; //npm i @mediapipe/camera_utils

function CaptureImage(props) {
  const [image, setImage] = useState(null);
  const [seconds, setSeconds] = useState(10);
  const { id } = useParams();
  const [flag, setFlag] = useState(false);
  const [warning, setWarning] = useState(false);

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

  useEffect(() => {
    if (isLoading == false) {
      clickImage();
      //   getLocation();
    }
  }, [flag, isLoading]);

  const clickImage = () => {
    setTimeout(async () => {
      if (facesDetected != 1) {
        setWarning(true);
      } else {
        picture = webcamRef?.current?.getScreenshot({
          width: 400,
          height: 400,
        });

        setImage(picture);
        // console.log("image----", image);
      }
    }, 10000);
  };

  //   const UploadPicture = async () => {
  //     if (image) {
  //       console.log("Image---->", image);
  //       try {
  //         const response = await axios.put(
  //           `http://localhost:3002/image/${id}`,
  //           {
  //             Image: image,
  //             Latitude: latitude,
  //             Longitude: longitude,
  //             Address: address,
  //           },
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );

  //         if (response.status == 200) {
  //           window.location = "/";
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };

  return (
    <div>
      <div className="container p-5">
        <div
          style={{
            width: "500px",
            height: "500px",
            position: "relative",
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="container mb-5">
            {image ? (
              <>
                <div className="success-msg">Image captured succesfully!!!</div>
                <img src={image} className="taken-image" />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setFlag(!flag);
                    setSeconds(10);
                    setImage(null);
                  }}
                >
                  Retake
                </button>
                <button
                  className="btn btn-success float-end"
                  onClick={() => {
                    // UploadPicture();
                    // getAddress();
                  }}
                >
                  Submit Picture
                </button>
              </>
            ) : (
              <div>
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
                  ref={webcamRef}
                  style={{
                    width: "500px",
                    height: "500px",
                    position: "absolute",
                    borderRadius: "50%",
                  }}
                />
              </div>
            )}
          </div>
          {seconds > 0 ? <div className="seconds">{seconds}</div> : null}
        </div>

        {warning ? (
          <>
            <div className="warning">
              Image can only be clicked when there is only one person in the
              frame!!
              <br />
              Curently, the number of faces recognised are {facesDetected}
              <br />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                setFlag(!flag);
                setSeconds(10);
                setImage(null);
                setWarning(false);
              }}
            >
              Retake
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default CaptureImage;
