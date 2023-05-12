import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ApiCall } from "../functions/ApiCall";
import { Icons } from "../icons/Icons";

function EmiDetails({ uid }) {
	const [loanData, setLoanData] = useState();
	const { token } = useContext(UserContext);

	useEffect(() => {
		fetchData(uid);
	}, []);

	const fetchData = async (uid) => {
		const config = {
			method: "get",
			url: `http://localhost:4000/api/v1/getLoanWithEMI/${uid}`,
			headers: { "Content-Type": "application/json", authorization: token },
		};

		try {
			const response = await ApiCall(config);

			if (response.status === 201) {
				console.log(response?.data?.data);
				setLoanData(response?.data?.data);
			} else {
				alert("Something went Wrong");
			}
		} catch (error) {
			console.log("Something Went wrong");
		}
	};
	return (
		<div className="dashboard-card-border">
			<div className="row m-5">
				<div className="col-12">
					<h4>EMI Details</h4>
					<hr className="mt-2 mb-1" />
					{loanData?.loanData?.Loan_state == 1300 ? (
						<>
							<div>
								<p className="mt-3 mb-1">Emi Details are as given...</p>
								<table className="table table-bordered">
									<tbody>
										<tr>
											<td>Loan Amount</td>
											<td>{loanData?.loanData?.amountApproved}</td>
										</tr>
										<tr>
											<td>Loan Term (Months)</td>
											<td>{loanData?.loanData?.tenureApproved}</td>
										</tr>
										<tr>
											<td>Payments Per Month</td>
											<td>1200</td>
										</tr>
										<tr>
											<td>Rate of Interest</td>
											<td>{loanData?.loanData?.minRoiApproved} %</td>
										</tr>
										<tr>
											<td>Collection Fee (On Outstanding Principal)</td>
											<td>12.00 %</td>
										</tr>
										<tr>
											<td>Regular EMI</td>
											<td>{loanData?.EMI?.EMI}</td>
										</tr>
										{/* <tr>
										<td>EMI due date</td>
										<td></td>
									</tr> */}
										<tr>
											<td>Additional Charges</td>
											<td>18% pa</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div>
								<h6 className="mt-3">Calculation of details of EMI</h6>

								<table className="table table-bordered">
									<thead>
										<tr>
											<th scope="col">MONTHS</th>
											<th scope="col">Opening Balance</th>
											<th scope="col">Monthly Installment</th>
											<th scope="col">Closing Balance</th>
											<th scope="col">Interest Amount Payable</th>
											<th scope="col">Principal</th>
										</tr>
									</thead>
									<tbody>
										{loanData?.EMI?.table?.map((row) => (
											<tr key={row.installmentNo}>
												<th scope="row">{row.installmentNo}</th>
												{/* <td>{row.installmentDate}</td> */}
												<td>
													{Icons.smallRupee}
													{row.openingBalence}
												</td>
												<td>
													{Icons.smallRupee}
													{loanData?.EMI?.EMI}
												</td>
												<td>
													{Icons.smallRupee}
													{row.closingBalence}
												</td>
												<td>
													{Icons.smallRupee}
													{row.interestPerMonth}
												</td>
												<td>
													{Icons.smallRupee}
													{row.principle}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default EmiDetails;
