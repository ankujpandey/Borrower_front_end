import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserImageContext } from "../context/UserImageContext";

function AadharUploadComponent(props) {
  const { image, setImage } = useContext(UserImageContext);

  const [bioImage, setBioImage] = useState();

  let formData = new FormData();

  const biometicBlob = async (base64) => {
    return new Promise(async (resolve, reject) => {
      await fetch(base64).then(async (res) => resolve(res.blob()));
    });
  };

  useEffect(() => {
    handleImage();
    console.log("image---------------", biometicBlob(image));
  }, []);

  const handleImage = async () => {
    const img = await JSON.parse(localStorage.getItem("capImg"));

    if (img) {
      setImage(img);
      biometicBlob(img).then((res) => {
        console.log(res);
        formData.append("biometric", res, "image/webp");
      });
      localStorage.removeItem("capImg");
    }
  };

  // submit button handle

  const handlesubmit = (e) => {
    e.preventDefault();
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
      noValidate
    >
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
        <Link to="/bank-details">
          <button type="submit" className="btn btn-success mt-3">
            Upload
          </button>
        </Link>
      </div>
    </form>
  );
}

export default AadharUploadComponent;
