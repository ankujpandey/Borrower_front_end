import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function HeroImage(props) {
	return (
		<div className="position-relative p-0">
			{/* <NavBar /> */}
			<div className="py-5 bg-primary hero-header mb-5">
				<div className="container my-4 py-5 px-lg-5">
					<div className="row g-4 py-3">
						<div className="col-lg-6 text-center text-lg-start">
							<h1 className="text-white mb-4 mt-3 animated zoomIn">
								Get Up-to 12% intrest loan
							</h1>
							<p className="text-white pb-3 animated zoomIn">
								Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
								stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
								Sit diam sit justo amet ipsum vero ipsum clita lorem
							</p>
							<Link
								className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
								to="/sign-in">
								Sign-In
							</Link>
							<Link
								className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
								to="/sign-up">
								Sign-Up
							</Link>
						</div>
						<div className="col-lg-6 text-center mb-3">
							<img className="img-fluid mb-5" src="img/loan.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroImage;
