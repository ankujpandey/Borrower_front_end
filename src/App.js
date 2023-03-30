import "./App.css";
import EmploymentDetails from "./pages/EmploymentDetails";
// import AadharUploadComponent from "./components/AadharUploadComponent";
// import SignUpComponent from "./pages/SignUpPage";
// import LoginComponent from "./pages/LoginPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"; //npm i react-router-dom
import Register from "./pages/Register";
import Register3 from "./pages/Register3";
import Register4 from "./pages/Register4";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Address from "./components/Address";
import BorrowingDetails from "./components/BorrowingDetails";
import { UserProvider } from "./components/UserContext";

function App() {
	return (
		<UserProvider>
			{/* <EmploymentDetails /> */}
			{/* <AadharUploadComponent /> */}
			{/* <SignUpComponent /> */}
			{/* <LoginComponent /> */}
			{/* <LoginPage /> */}
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/sign-in" element={<LoginPage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/register2" element={<EmploymentDetails />} />
				<Route path="/register3" element={<Register3 />} />
				<Route path="/register4" element={<Register4 />} />
				<Route path="/address" element={<Address />} />
				<Route path="/borrowing-details" element={<BorrowingDetails />} />
			</Routes>
		</UserProvider>
	);
}

export default App;
