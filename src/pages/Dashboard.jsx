import React from "react";
import { NavLink } from "react-router-dom";

function Dashboard(props) {
	return (
		<div className="container">
			This is users Dash board
			<br />
			<NavLink to="/register">
				<button className="btn btn-primary mt-3">Register</button>
			</NavLink>
		</div>
	);
}

export default Dashboard;
