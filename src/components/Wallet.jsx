import React from "react";
import { Icons } from "../icons/Icons";

function Wallet(props) {
	return (
		<div className="dashboard-card-border">
			<div className="row m-5">
				<div className="col-12">
					{/* <h4>Wallet</h4>
					<hr className="mt-2 mb-1" /> */}
					<div className="row m-5 justify-content-center">
						<div className="card wallet-user-div pb-5 shadow justify-content-center align-items-center ">
							<div className=""></div>
							<p className="wallet-holder-name mt-3">
								{/* Hello! Ankuj */}
								Your Wallet
							</p>
						</div>
						<div className="card col-8 wallet-div shadow mb-4 bg-body-tertiary rounded animated slideInDown">
							<div className="row justify-content-center align-items-center">
								<div className="col-md-5">{Icons.wallet}</div>
								<div className="col-md-6">
									<p className="mb-0">Your Balance</p>
									<h1 className="mt-0">&#8377; 500</h1>
								</div>
							</div>
						</div>

						<div className="row mt-2 justify-content-center">
							<div className="col-4">
								<button className="btn ms-3 btn-primary py-sm-3 px-sm-5 rounded-pill animated slideInLeft">
									Add Money
								</button>
							</div>

							<div className="col-4">
								<button className="btn ms-3 btn-primary py-sm-3 px-sm-5 rounded-pill animated slideInRight">
									Passbook
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Wallet;
