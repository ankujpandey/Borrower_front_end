import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; //npm i react-router-dom
import { UserProvider } from "./contextAPI/UserContext";
import { UserImageProvider } from "./contextAPI/UserImageContext";

// Main Pages
import Home from "./pages/MainPages/Home";
import About from "./pages/MainPages/About";
import Contact from "./pages/MainPages/Contact";
import LoginComponent from "./pages/MainPages/LoginPage";
import SignUpPage from "./pages/MainPages/SignUpPage";
import Team from "./pages/MainPages/Team";

// Dashboards
import AdminDashboard from "./pages/Dashboards/AdminDashboard";
import AgentDashboard from "./pages/Dashboards/AgentDashboard";
import Dashboard from "./pages/Dashboards/Dashboard";

// Registration Pages
import AadhaarUpload from "./pages/RegistrationPages/AadhaarUpload";
import Address from "./pages/RegistrationPages/Address";
import BankDetails from "./pages/RegistrationPages/BankDetails";
import BorrowingDetails from "./pages/RegistrationPages/BorrowingDetails";
import EmploymentDetails from "./pages/RegistrationPages/EmploymentDetails";
import ImageCapture from "./pages/RegistrationPages/ImageCapture";
import PanCardDetails from "./pages/RegistrationPages/PanCardDetails";
import PersonalDetails from "./pages/RegistrationPages/PersonalDetails";

import UserDetails from "./pages/UserDetails";
import PoolTable from "./components/LoanComponents/PoolTable";
import NavBar from "./components/MainComponents/NavBar";
import Footer from "./components/MainComponents/Footer";
import Disclaimer from "./pages/MainPages/Disclaimer";

function App() {
	// const { user, setUser } = useContext(UserContext);
	return (
		<UserImageProvider>
			<UserProvider>
				<NavBar />
				<Routes>
					{/* Main Pages  */}

					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/sign-in" element={<LoginComponent />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/team" element={<Team />} />

					{/* Dashboards */}

					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/admin-dashboard" element={<AdminDashboard />} />
					<Route path="/agent-dashboard" element={<AgentDashboard />} />

					{/* Registration Pages */}

					<Route path="/aadhaar-upload" element={<AadhaarUpload />} />
					<Route path="/address" element={<Address />} />
					<Route path="/bank-details" element={<BankDetails />} />
					<Route path="/borrowing-details" element={<BorrowingDetails />} />
					<Route path="/employment-details" element={<EmploymentDetails />} />
					<Route path="/image-capture" element={<ImageCapture />} />
					<Route path="/pancard" element={<PanCardDetails />} />
					<Route path="/personal-details" element={<PersonalDetails />} />

					<Route path="/users/:id" element={<UserDetails />} />
					<Route path="/pool-table" element={<PoolTable />} />
					<Route path="/disclaimer" element={<Disclaimer />} />
				</Routes>
				<Footer />
			</UserProvider>
		</UserImageProvider>
	);
}

export default App;
