import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import '../css/Nav.css'
const Nav = () => {
  return (
    <>
    
      <nav className="navbar">
        <div className="logo">
          <img src={logo} />
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/location" className="nav-link">
              Location
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav