import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="container mt-3">
      <div className="col md-12">
        <h1>Home Page</h1>
        <Link to="/register">
          <button className="btn btn-primary">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
