import React, { useContext, useEffect, useState } from "react";
import { useHandleValidation } from "../../hooks/useHandleValidation";
import { salariedSchema, initialValuesSalaried } from "../../schemas";
import { UserContext } from "../../contextAPI/UserContext";
import { Icons } from "../../icons/Icons";
import axios from "axios";

function SalariedEmployee(props) {
	const { user, token } = useContext(UserContext);
	const url = "/image-capture";
	const api = "http://localhost:4000/api/v1/createEmployment";
	const [companies, setCompanies] = useState([]);
	// const [companyName, setCompanyName] = useState("");

	useEffect(() => {
		getCompanies();
	}, []);

	const {
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
	} = useHandleValidation(
		initialValuesSalaried,
		salariedSchema,
		url,
		api,
		token
	);

	// -----------------------------------------------
	// 	fetch Company name from Backend
	// -----------------------------------------------
	const getCompanies = async () => {
		const res = await axios.get("http://localhost:4000/api/v1/getAllCompany");
		console.log(res.data.data);
		setCompanies(res.data.data);
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
						<input
							type="text"
							className={`form-control ${
								errors.company_name && touched.company_name
									? "is-invalid"
									: touched.company_name
									? "is-valid"
									: ""
							}`}
							id="company_name"
							name="company_name"
							placeholder="None"
							value={values.company_name}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<label htmlFor="company_name">Company Name</label>
						{console.log(values.company_name)}
						<div className="dropdown shadow">
							{companies
								.filter((item) => {
									const searchTerm = values.company_name.toLowerCase();
									const company_name = item.company_name.toLowerCase();

									return (
										searchTerm &&
										company_name.startsWith(searchTerm) &&
										company_name !== searchTerm
									);
								})
								.map((item) => (
									<div
										className="dropdown-row"
										onClick={() => {
											setFieldValue("company_name", item.company_name);
										}}
										value={item.company_id}>
										- {item.company_name}
									</div>
								))}
						</div>

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
							type="professional_email"
							className={`form-control ${
								errors.professional_email && touched.professional_email
									? "is-invalid"
									: touched.professional_email
									? "is-valid"
									: ""
							}`}
							id="professional_email"
							name="professional_email"
							placeholder="Enter your Professional Email Id"
							value={values.professional_email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<label htmlFor="professional_email">Professional Email id</label>
						{errors.professional_email && touched.professional_email ? (
							<p className="form-error form-validation-warning text-danger">
								{errors.professional_email}
							</p>
						) : null}
					</div>
				</div>
				<div className="col-4">
					<button
						type="submit"
						className="btn btn-primary w-100 py-3 btn-primary">
						Next {Icons.next}
					</button>
				</div>
			</div>
		</form>
	);
}

export default SalariedEmployee;
