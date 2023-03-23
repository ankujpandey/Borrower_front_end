import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"; //npm i react-router-dom
import Register from "./pages/Register";
import Register3 from "./pages/Register3";
import Register4 from "./pages/Register4";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register3" element={<Register3 />} />
        <Route path="/register4" element={<Register4 />} />
      </Routes>
    </>
  );
}

export default App;
