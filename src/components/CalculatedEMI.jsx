import React from "react";
import Chart from "react-google-charts";
import { Icons } from "../icons/Icons";

function CalculatedEMI(props) {
	console.log("calc data on Calculated EMI", props.calcData, props.flag);
	const data = [
		["Task", "Hours per Day"],
		[
			"Principle Amount",
			props.calcData.total_Amount - props.calcData.total_Interest,
		],
		["Total Interest", props.calcData.total_Interest],
		// CSS-style declaration
	];

	const options = {
		title: "Break-up of total payment",
		legend: { position: "bottom" },
		pieHole: 0.4,
		is3D: false,
	};
	return (
		<div className="container-xxl mt-5">
			<div className="container px-lg-5">
				<div className="row justify-content-center">
					<div className="card shadow p-3 bg-body-tertiary rounded wow fadeInUp">
						<div className="row justify-content-center m-2">
							<div className="col-lg-5">
								<div className="emi-calculations mt-4">
									<ul>
										<li className="li-emi">
											Loan EMI
											<span>
												{Icons.salary}
												{props.calcData.EMI}
											</span>
										</li>
										<hr />
										<li className="li-emi">
											Total Interest Payable
											<span>
												{Icons.salary}
												{props.calcData.total_Interest}
											</span>
										</li>
										<hr />
										<li className="li-emi">
											Total Payment <br />
											(Principle + Interest)
											<span>
												{Icons.salary}
												{props.calcData.total_Amount}
											</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								{/* <span>Break-up of total payment</span> */}
								<Chart
									chartType="PieChart"
									width="100%"
									height="400px"
									data={data}
									options={options}
								/>
							</div>
							<hr />
							<div className="d-flex justify-content-center mt-2">
								<button
									className="btn btn-primary rounded-pill px-4"
									onClick={() => {
										props.setFlag(false);
									}}>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CalculatedEMI;
