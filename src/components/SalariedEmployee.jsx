import React, { useContext } from "react";
import { useHandleValidation } from "../hooks/useHandleValidation";
import { salariedSchema, initialValuesSalaried } from "../schemas";
import { UserContext } from "../context/UserContext";
import MyAutosuggest from "./MyAutosuggest";

function SalariedEmployee(props) {
	const { user, token } = useContext(UserContext);
	const url = "/register3";
	const api = "http://localhost:4000/api/v1/createEmployment";

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useHandleValidation(initialValuesSalaried, salariedSchema, url, api, token);

	const setCompanyName = (value) => {
		values.company_name = value;
	};

	values.uid = user?.signUp?.uid;

	return (
		<form
			action=""
			onSubmit={handleSubmit}
			className="needs-validation"
			noValidate>
			<div className="row justify-content-center g-3 m-3 mb-4">
				<div className="col-md-6">
					<div className="form-floating">
						<input
							type="text"
							className={`form-control ${
								errors.monthly_income && touched.monthly_income
									? "is-invalid"
									: touched.monthly_income
									? "is-valid"
									: ""
							}`}
							id="monthly_income"
							name="monthly_income"
							placeholder="Enter your monthly income"
							value={values.monthly_income}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<label className="col-form-label" htmlFor="monthly_income">
							Monthly Salary
						</label>
						{errors.monthly_income && touched.monthly_income ? (
							<p className="form-error form-validation-warning text-danger">
								{errors.monthly_income}
							</p>
						) : null}
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-floating">
						<label htmlFor="company_name" className="form-label">
							Company Name:
						</label>

						<MyAutosuggest setCompanyName={setCompanyName} />

						{errors.company_name && touched.company_name ? (
							<p className="form-error form-validation-warning text-danger">
								{errors.company_name}
							</p>
						) : null}
					</div>
				</div>

				<div className="col-md-12">
					<div className="form-floating">
						<input
							type="email"
							className={`form-control ${
								errors.email && touched.email
									? "is-invalid"
									: touched.email
									? "is-valid"
									: ""
							}`}
							id="email"
							name="email"
							placeholder="Enter your Professional Email Id"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<label htmlFor="company_email" className="col-form-label">
							Professional Email id:
						</label>
						{errors.email && touched.email ? (
							<p className="form-error form-validation-warning text-danger">
								{errors.email}
							</p>
						) : null}
					</div>
				</div>
			</div>
			<div className="col-4">
				<button
					type="submit"
					className="btn btn-primary w-100 py-3 btn-primary">
					Submit
				</button>
			</div>
		</form>
	);
}

export default SalariedEmployee;

// body {
//   font-family: Helvetica, sans-serif;
// }

// .react-autosuggest__container {
//   position: relative;
//   margin-bottom: 200px;
// }

// .react-autosuggest__input {
//   width: 240px;
//   color:red;
//   height: 30px;
//   padding: 10px 20px;
//   font-family: Helvetica, sans-serif;
//   font-weight: 300;
//   font-size: 16px;
//   border: 1px solid #aaa;
//   border-radius: 4px;
// }

// .react-autosuggest__input--focused {
//   outline: none;
// }

// .react-autosuggest__input--open {
//   border-bottom-left-radius: 0;
//   border-bottom-right-radius: 0;
// }

// .react-autosuggest__suggestions-container {
//   display: none;
// }

// .react-autosuggest__suggestions-container--open {
//   display: block;
//   position: absolute;
//   top: 51px;
//   width: 280px;
//   border: 1px solid #aaa;
//   background-color: #fff;
//   font-family: Helvetica, sans-serif;
//   font-weight: 300;
//   font-size: 16px;
//   border-bottom-left-radius: 4px;
//   border-bottom-right-radius: 4px;
//   z-index: 2;
// }

// .react-autosuggest__suggestions-list {
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
// }

// .react-autosuggest__suggestion {
//   cursor: pointer;
//   padding: 10px 20px;
// }

// .react-autosuggest__suggestion--highlighted {
//   background-color: #ddd;
// }
