import React, { useContext, useEffect, useState } from "react";
import { Icons } from "../icons/Icons";
import { UserContext } from "../context/UserContext";
import { ApiCall } from "../functions/ApiCall";

function PassBook({ uid }) {
	const [passbook, setPassbook] = useState();
	const { token } = useContext(UserContext);

	useEffect(() => {
		fetchData(uid);
	}, []);

	const fetchData = async (uid) => {
		const config = {
			method: "get",
			url: `http://localhost:4000/api/v1/getUserTransaction/${uid}`,
			headers: { "Content-Type": "application/json" },
		};

		try {
			const response = await ApiCall(config);

			if (response.status === 201) {
				console.log(response?.data?.data);
				setPassbook(response?.data?.data);
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
					<h4>Passbook</h4>
					<hr className="mt-2 mb-1" />
				</div>
				<div className="col-12 mt-3">
					<table className="table table-bordered">
						<thead>
							<tr>
								<th scope="col">TXN ID</th>
								<th scope="col">Date</th>
								<th scope="col">Transaction Type</th>
								<th scope="col">Transaction flow</th>
								<th scope="col">Transaction Amount</th>
								<th scope="col">Remaining Balence</th>
							</tr>
						</thead>
						<tbody>
							{/* {loanData?.EMI?.table?.map((row) => ( */}
							<tr>
								{/* <th scope="row">{row.installmentNo}</th> */}

								<td>2341</td>
								<td>24-12-2023</td>
								<td>credit</td>
								<td>loan</td>
								<td>10000</td>
								<td>10500</td>
							</tr>
							{/* ))} */}
						</tbody>
					</table>
				</div>
				{/* <div className="col-12">
					<div className="card p-2">
						<h6>Yore transaction Amount</h6>
						<p></p>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default PassBook;
