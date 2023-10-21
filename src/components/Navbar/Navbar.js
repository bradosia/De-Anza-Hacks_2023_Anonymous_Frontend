import React from "react"
import { Link } from "react-router-dom"
import "../../styles/Navbar.css"

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

// https://getbootstrap.com/docs/4.0/components/navbar/
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark relative-top">
      <div className="container mb-1">
        <a className="navbar-brand" href="#">
          <strong>Cats Map</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/Rider" className="nav-link">
                Rider
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;