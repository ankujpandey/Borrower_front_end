import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import "../styles/Home.css";
import EmiCalculator from "../components/EmiCalculator";
import CalculatedEMI from "../components/CalculatedEMI";
function Home(props) {
	useEffect(() => {
		localStorage.clear();
	}, []);

	return (
		<div>
			<HeroImage />
			<EmiCalculator />
			<CalculatedEMI />
		</div>
	);
}

export default Home;
