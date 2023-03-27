import logo from "./logo.svg";
import "./App.css";
import EmploymentDetails from "./pages/EmploymentDetails";
import AadharUploadComponent from "./components/AadharUploadComponent";
import SignUpComponent from "./components/SignUpComponent";
import LoginComponent from "./components/LoginComponent";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"; //npm i react-router-dom
import Register from "./pages/Register";
import Register3 from "./pages/Register3";
import Register4 from "./pages/Register4";

function App() {
  return (
    <div>
      {/* <EmploymentDetails /> */}
      {/* <AadharUploadComponent /> */}
      {/* <SignUpComponent /> */}
      <LoginComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register3" element={<Register3 />} />
        <Route path="/register4" element={<Register4 />} />
      </Routes>
    </div>
    )}

export default App;
