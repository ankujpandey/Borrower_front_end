import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function NavBar(props) {
  const { user, setUser } = useContext(UserContext);
  // console.log(user);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="/" className="navbar-brand p-0">
        <h1 className="m-0">
          <i className="fa fa-search me-2" />
          Mr<span className="fs-5">Borrower</span>
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          {!user ? (
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
          ) : (
            <Link to="/dashboard" className="nav-item nav-link">
              Home
            </Link>
          )}
          <Link href="about.html" className="nav-item nav-link">
            About
          </Link>
          <Link href="service.html" className="nav-item nav-link">
            Service
          </Link>
          <Link href="project.html" className="nav-item nav-link">
            Project
          </Link>
          <div className="nav-item dropdown">
            <Link
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </Link>
            <div className="dropdown-menu m-0">
              <Link href="team.html" className="dropdown-item">
                Our Team
              </Link>
              <Link href="testimonial.html" className="dropdown-item">
                Testimonial
              </Link>
              <Link href="404.html" className="dropdown-item">
                404 Page
              </Link>
            </div>
          </div>
          <Link href="contact.html" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <button
          type="button"
          className="btn text-secondary ms-3"
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
        >
          <i className="fa fa-search" />
        </button>
        {!user ? (
          <Link
            to="/sign-in"
            className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
          >
            Log-In
          </Link>
        ) : (
          <a
            role="button"
            className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
            onClick={() => {
              setUser(null);
              localStorage.clear();
              navigate("/");
            }}
          >
            Log-Out
          </a>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
