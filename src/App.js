import React from "react";

import "./App.css";
import EmploymentDetails from "./pages/EmploymentDetails";
// import AadharUploadComponent from "./components/AadharUploadComponent";
// import SignUpComponent from "./pages/SignUpPage";
// import LoginComponent from "./pages/LoginPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"; //npm i react-router-dom
import PersonalDetails from "./pages/PersonalDetails";
import Register3 from "./pages/Register3";
import BankDetails from "./pages/BankDetails";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Address from "./components/Address";
import BorrowingDetails from "./components/BorrowingDetails";
import { UserProvider } from "./context/UserContext";
import { useContext } from "react";

function App() {
  // const { user, setUser } = useContext(UserContext);
  return (
    <UserProvider>
      {/* <EmploymentDetails /> */}
      {/* <AadharUploadComponent /> */}
      {/* <SignUpComponent /> */}
      {/* <LoginComponent /> */}
      {/* <LoginPage /> */}
      <NavBar />

      {/* {user ? (
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/register" element={<Register />} />
					<Route path="/register2" element={<EmploymentDetails />} />
					<Route path="/register3" element={<Register3 />} />
					<Route path="/register4" element={<Register4 />} />
					<Route path="/address" element={<Address />} />
					<Route path="/borrowing-details" element={<BorrowingDetails />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/sign-in" element={<LoginPage />} />
				</Routes>
			)} */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/employment-details" element={<EmploymentDetails />} />
        <Route path="/register3" element={<Register3 />} />
        <Route path="/bank-details" element={<BankDetails />} />
        <Route path="/address" element={<Address />} />
        <Route path="/borrowing-details" element={<BorrowingDetails />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
