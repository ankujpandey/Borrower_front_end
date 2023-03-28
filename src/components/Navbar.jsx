import React from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../icons/Icons";

function Navbar(props) {
	return (
		<nav className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
			<div className="container">
				<a className="navbar-brand" href="#">
					Borrower
				</a>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<a className="nav-link fw-medium" aria-current="page" href="#">
									Sign-Up
								</a>
								<a className="nav-link fw-medium" href="#">
									Sign-In
								</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</nav>
	);
}

export default Navbar;
