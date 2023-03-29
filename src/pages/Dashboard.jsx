import React from "react";
import { NavLink } from "react-router-dom";

function Dashboard(props) {
	return (
		<div>
			<div className="py-5 bg-primary hero-header mb-3">
				<div className="container py-3 px-5">
					<div className="row mt-5">
						<div className="col-12 text-center">
							<div data-wow-delay="0.1s">
								<h1 class="text-white animated zoomIn mt-5">Welcome!</h1>
							</div>
							<hr
								className="bg-white mx-auto mt-0 mb-5"
								style={{ width: 90 }}
							/>
							<nav aria-label="breadcrumb"></nav>
						</div>
					</div>
				</div>
			</div>
			<div
				class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
				data-wow-delay="0.1s">
				<h6 class="position-relative d-inline text-primary ps-4">Dash Board</h6>
				<h2 class="mt-2">Press Button To Continue</h2>
			</div>

			<div class="row d-flex justify-content-center">
				<div class="col-lg-5 d-flex justify-content-center">
					<div className="col-10 card wow fadeInUp" data-wow-delay="0.3s">
						<NavLink to="/register">
							<button
								type="submit"
								className="btn btn-primary w-100 py-3 btn-primary">
								Register
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
