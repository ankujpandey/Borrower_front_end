import React, { useContext } from "react";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { RegistrationInitialValues, RegistrationSchema } from "../schemas";
import { UserContext } from "../context/UserContext";

function PersonalDetails() {
  const { user, token } = useContext(UserContext);
  console.log("Token at register--", token);

  console.log("user at register", user);

  const url = "/address";

  let api = "http://localhost:4000/api/v1/user_info/" + user?.signUp?.uid;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(
      RegistrationInitialValues,
      RegistrationSchema,
      url,
      api,
      token
    );

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const userdata = JSON.parse(localStorage.getItem("localUser"));
  //   if (userdata) {
  //     setUser(userdata.result);
  //     console.log(userdata);
  //     setLoading(false);

  //     //   console.log(user);
  //   }
  // }, []);

  // if (loading) {
  //   return <div>Loading....</div>;
  // }
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
        data-wow-delay="0.1s"
      >
        <h6 className="position-relative d-inline text-primary ps-4">
          Initial Registration
        </h6>
        <h2 className="mt-2">Please enter the following details...</h2>
      </div>

      <div className="container px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div
              className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <form
                action=""
                onSubmit={handleSubmit}
                className="needs-validation"
                noValidate
              >
                <div className="row justify-content-center g-3 m-3 mb-4">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        id="firstName"
                        value={user?.userName?.firstName}
                        disabled
                      />
                      <label htmlFor="firstName">First Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        id="lastName"
                        value={user?.userName?.lastName}
                        disabled
                      />
                      <label htmlFor="lastName">Last Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.contact && touched.contact
                            ? "is-invalid"
                            : touched.contact
                            ? "is-valid"
                            : ""
                        }`}
                        name="contact"
                        id="contact"
                        placeholder="Contact"
                        value={values.contact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="contact">Contact</label>
                      {errors.contact && touched.contact ? (
                        <div className="form-error form-validation-warning text-danger">
                          {errors.contact}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        value={user?.signUp?.email}
                        disabled
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.pan && touched.pan
                            ? "is-invalid"
                            : touched.pan
                            ? "is-valid"
                            : ""
                        }`}
                        name="pan"
                        id="pan"
                        placeholder="PAN"
                        value={values.pan}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="pan">PAN</label>
                      {errors.pan && touched.pan ? (
                        <div className="form-error form-validation-warning text-danger">
                          {errors.pan}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.aadhaar && touched.aadhaar
                            ? "is-invalid"
                            : touched.aadhaar
                            ? "is-valid"
                            : ""
                        }`}
                        name="aadhaar"
                        id="aadhaar"
                        placeholder="Aadhaar"
                        value={values.aadhaar}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="aadhaar">Aadhaar</label>
                      {errors.aadhaar && touched.aadhaar ? (
                        <div className="form-error form-validation-warning text-danger">
                          {errors.aadhaar}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-3 btn-primary"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
