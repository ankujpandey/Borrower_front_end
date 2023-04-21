import React from "react";
import Chart from "react-google-charts";

function CalculatedEMI(props) {
	const data = [
		["Task", "Hours per Day"],
		["Work", 11],
		["Eat", 13],
		// CSS-style declaration
	];

	const options = {
		title: "  Break-up of total payment",
		pieHole: 0.4,
		is3D: false,
	};
	return (
		<div className="container-xxl">
			<div className="container px-lg-5">
				<div className="row justify-content-center">
					<div className="card">
						<div className="row justify-content-center">
							<div className="col-lg-5">
								<div className="emi-calculations mt-4">
									<ul>
										<li className="li-emi">Loan EMI </li>
										<hr />
										<li className="li-emi">Total Interest Payable</li>
										<hr />
										<li className="li-emi">
											Total Payment <br />
											(Principle + Interest)
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<Chart
									chartType="PieChart"
									width="100%"
									height="300px"
									data={data}
									options={options}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CalculatedEMI;
