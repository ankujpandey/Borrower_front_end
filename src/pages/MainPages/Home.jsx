import React, { useEffect } from "react";
import "../../styles/Home.css";
import HeroImage from "../../components/MainComponents/HeroImage";
import EmiCalculator from "../../components/LoanComponents/EmiCalculator";

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
