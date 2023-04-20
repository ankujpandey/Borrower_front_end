import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import "../styles/Home.css";
function Home(props) {
	useEffect(() => {
		localStorage.clear();
	}, []);

	return (
		<div>
			<HeroImage />
		</div>
	);
}

export default Home;
