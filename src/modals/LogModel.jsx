import React from "react";

import { Icons } from "../icons/Icons";
import moment from "moment";

function LogModel(logData) {
	console.log("log data------>>>>", logData?.logData);
	return (
		<div className="modal fade" id="LogModal" tabIndex={-1}>
			<div
				className="modal-dialog"
				style={{
					maxWidth: "45%",
				}}
				role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title me-1" id="exampleModalLongTitle">
							ID:
						</h5>

						<h5 className="modal-title text-primary" id="exampleModalLongTitle">
							{logData?.logData?.id}
						</h5>

						<h5 className="modal-title ms-3 me-1">Name: </h5>

						<h5 className="modal-title text-primary">
							{logData?.logData?.firstName} {logData?.logData?.lastName}
						</h5>
					</div>
					<div className="modal-body calculator-msg modals-card-border">
						<div className="list-group py-1">
							{logData?.logData?.logs?.map((logdata) => (
								<div className="list-group-item border-0" key={logdata.Logid}>
									<div className="d-flex">
										<div className="log-icon-div me-2">
											<div className="log-icon">{Icons.log}</div>
										</div>
										<div className="media-body">
											<div className="d-flex mt-1 align-items-between">
												<div className="mt-0">
													<h6 className="mb-1 me-3 fs-14 fw-normal text-dark">
														<span className="fw-bold">
															{moment(logdata?.createdAt)
																.utc("+05:30")
																.format("DD MMM YY")}
														</span>
													</h6>
													<p className="my-0 calculator-msg text-muted">
														{moment(logdata?.createdAt)
															.utc("+05:30")
															.format("hh:mm a")}
													</p>
												</div>
												<div className="ml-22">
													<h5 className="mb-1 fs-14 fw-normal text-dark">
														<span className="fw-normal">
															<span className="text-primary fw-semibold">
																{logdata?.current_state < "1300" ? (
																	<> User Activity :</>
																) : logdata?.current_state === "1300" ||
																  logdata?.current_state === "1400" ? (
																	<>Agent Activity :</>
																) : logdata?.current_state === "1500" ? (
																	<>User Activity :</>
																) : logdata?.current_state === "1600" ? (
																	<>Agent Activity</>
																) : (
																	<>User Activity</>
																)}
															</span>

															{logdata?.current_state === "1000" ? (
																<> New User Signup! </>
															) : logdata?.current_state === "1100" ? (
																<> Registration completed by user.</>
															) : logdata?.current_state === "1200" ? (
																<> Loan applied by user.</>
															) : logdata?.current_state === "1300" ? (
																<> Agent reviewed the user profile.</>
															) : logdata?.current_state === "1400" ? (
																<>
																	Available loan proposed by agent and agreement
																	initiated.
																</>
															) : logdata?.current_state === "1500" ? (
																<> Loan agreement accepted by user!</>
															) : logdata?.current_state === "1600" ? (
																<> Loan disbursed!</>
															) : logdata?.current_state === "1700" ? (
																<> Loan Repaid!</>
															) : logdata?.current_state === "-1000" ? (
																<> Loan agreement rejected by user!</>
															) : null}
														</span>
													</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-primary rounded-pill px-4"
							data-bs-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LogModel;
