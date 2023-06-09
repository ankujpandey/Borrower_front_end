import React from "react";

import { Icons } from "../icons/Icons";
import moment from "moment";

function LogModel(logData) {
	return (
		<div className="modal fade" id="LogModal" tabIndex={-1}>
			<div
				className="modal-dialog"
				style={{
					maxWidth: "50%",
				}}
				role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLongTitle">
							Log Activity
						</h5>
					</div>
					<div className="modal-body modals-card-border">
						<div className="list-group py-1">
							{logData?.logData?.map((logdata) => (
								<div className="list-group-item border-0" key={logdata.Logid}>
									<div className="media mt-0 align-item-center">
										<div className="transcations-icon">
											<i>{Icons.BsCalendarCheck}</i>
										</div>
										<div className="media-body">
											<div className="d-flex align-items-between">
												<div className="mt-0">
													<h6 className="mb-1 fs-6 fw-normal text-dark">
														<span className="fs-11 fw-semibold">
															{moment(logdata?.createdAt)
																.utc("+05:30")
																.format("DD MMM YY")}
														</span>
													</h6>
													<p className="mb-0 fs-10 text-muted">
														{moment(logdata?.createdAt)
															.utc("+05:30")
															.format("hh:mm")}
													</p>
												</div>
												<div className="ml-22">
													<h5 className="mb-1 calculator-msg fw-normal text-dark">
														<span className="fw-normal">
															<span className="text-blue">User Activity :</span>

															{logdata?.current_state === "1000" ? (
																<> User created successfully! </>
															) : logdata?.current_state === "1100" ? (
																<> Registration completed!</>
															) : logdata?.current_state === "1200" ? (
																<> Loan applied!</>
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
																<> Loan Repaid !</>
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
							className="btn btn-secondary"
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
