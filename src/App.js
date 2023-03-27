import logo from "./logo.svg";
import "./App.css";
import EmploymentDetails from "./pages/EmploymentDetails";
import AadharUploadComponent from "./components/AadharUploadComponent";
import SignUpComponent from "./pages/SignUpPage";
import LoginComponent from "./pages/LoginPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"; //npm i react-router-dom
import Register from "./pages/Register";
import Register3 from "./pages/Register3";
import Register4 from "./pages/Register4";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/Navbar";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div>
			{/* <EmploymentDetails /> */}
			{/* <AadharUploadComponent /> */}
			{/* <SignUpComponent /> */}
			{/* <LoginComponent /> */}
			{/* <LoginPage /> */}
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/Sign-up" element={<SignUpPage />} />
				<Route path="/Sign-in" element={<LoginPage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/register2" element={<EmploymentDetails />} />
				<Route path="/register3" element={<Register3 />} />
				<Route path="/register4" element={<Register4 />} />
			</Routes>
		</div>
	);
}

export default App;
