import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import "../styles/Home.css";
import EmiCalculator from "../components/EmiCalculator";
function Home(props) {
	useEffect(() => {
		localStorage.clear();
	}, []);

	return (
		<div>
			<HeroImage />
			<EmiCalculator />
		</div>
	);
}

export default Home;
