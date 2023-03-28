import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
function Home(props) {
	return (
		<div className="bg-image">
			<div className="container mt-3">
				<div className="col md-12">
					<div className="container ">
						<div></div>
						<Link to="/Sign-up">
							<button className="btn btn-primary">Sign-Up</button>
						</Link>

						<Link to="/Sign-in">
							<button className="btn btn-primary ms-5">Sign-In</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
