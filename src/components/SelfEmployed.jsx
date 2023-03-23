// import React from "react";

// function SelfEmployed(props) {
//   const initialValueSelfEmployee = {
//     nature_type: "",
//     monthly_income: "",
//     monthly_salary: "",
//     company_name: "",
//     company_email: "",
//   };

//   return (
//     <div>
//       <div className="form-group">
//         <label htmlFor="monthly_income">Monthly Income:</label>
//         <input
//           type="text"
//           className="form-control"
//           id="monthly_income"
//           name="monthly_income"
//           placeholder="Enter your monthly Income"
//           value={values.monthly_income}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         {errors.monthly_income && touched.monthly_income ? (
//           <p className="form-error text-danger">{errors.monthly_income}</p>
//         ) : null}
//       </div>
//       <div className="form-group">
//         <label htmlFor="nature_type">Nature of Business:</label>
//         <input
//           type="text"
//           className="form-control"
//           id="nature_type"
//           name="nature_type"
//           placeholder="Enter your nature of Business"
//           value={values.nature_type}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         {errors.nature_type && touched.nature_type ? (
//           <p className="form-error text-danger">{errors.nature_type}</p>
//         ) : null}
//       </div>
//       <button type="submit" className="btn btn-success">
//         Submit
//       </button>
//     </div>
//   );
// }

// export default SelfEmployed;
